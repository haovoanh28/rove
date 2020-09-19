const User = require("./../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const fs = require("fs");
const { promisify } = require("util");

const AppErr = require("./../utils/appErr");
const catchAsync = require("../utils/catchAsync");
const { createFile } = require("../googleHandler/googleHandler");

const unlinkAsync = promisify(fs.unlink);

const generateToken = (user) => {
  const sentUser = { ...user };
  delete sentUser._doc.password;

  return jwt.sign({ ...sentUser._doc }, process.env.SECRET_KEY, {
    expiresIn: "10d",
  });
};

exports.getAllUser = catchAsync(async (req, res, next) => {
  let users = await User.find().select("-password -email");
  res.status(200).json({
    status: "Success",
    data: {
      users,
    },
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const { password, email } = req.body;

  if (!email || !password) {
    return next(new AppErr("Please provide email and password", 403));
  }

  const check = await User.find({ email: email }).count();
  if (check) {
    return next(new AppErr("This email has been used", 403));
  }

  const user = await User.create(req.body);
  const accessToken = generateToken(user);

  res.status(201).json({
    status: "created successfully",
    data: {
      user,
      accessToken,
    },
  });
});

exports.userLogin = catchAsync(async (req, res, next) => {
  const { password, email } = req.body;

  if (!email || !password) {
    return next(new AppErr("Please provide email and password", 400));
  }

  const user = await User.findOne({
    email: email,
  });

  // Check if user exist and compare password comming from request with the actual user password
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppErr("Email or password incorrect", 403));
  }
  const accessToken = generateToken(user);

  res.status(200).json({
    status: "Login successfully",
    accessToken,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await getUserByID(id, next);
  res.status(200).json({
    message: "OK",
    data: user,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (req.user._id !== id.toString())
    return next(new AppErr("You're not allowed to do this action", 400));

  const updateInfo = req.body;
  const updatedUser = await updateUserAndAddToken(id, req.token, updateInfo);

  // const updatedUser = await User.findByIdAndUpdate(id, updateInfo, {
  //   new: true,
  // });
  // updatedUser["token"] = req.token;
  // const addedTokenUser = { ...updatedUser._doc, token: req.token };
  res.status(202).json({
    message: "Update success",
    data: updatedUser,
  });
});

exports.changeAvatar = catchAsync(async (req, res, next) => {
  const file = req.file;

  // file :
  // {
  //   fieldname: 'avatar',
  //   originalname: 'Screenshot_2020-05-03_11-28-10.png',
  //   encoding: '7bit',
  //   mimetype: 'image/png',
  //   destination: 'uploads',
  //   filename: 'Screenshot_2020-05-03_11-28-10-1594568429359.png',
  //   path: 'uploads/Screenshot_2020-05-03_11-28-10-1594568429359.png',
  //   size: 418348
  // }

  if (!file) return next(new AppErr("File not found", 404));

  const filePath = `${__dirname}/../${file.path}`;
  const fileSource = fs.createReadStream(filePath);

  const fileId = await createFile(fileSource);
  const { id } = req.params;
  const updateInfo = { avatar: `https://drive.google.com/uc?id=${fileId}` };

  const updatedUser = await updateUserAndAddToken(id, req.token, updateInfo);

  res.json({
    message: "Upload successfully",
    data: updatedUser,
  });

  // Delete file on server
  await unlinkAsync(file.path);
});

exports.addPhotos = catchAsync(async (req, res, next) => {
  const file = req.file;

  // file :
  // {
  //   fieldname: 'avatar',
  //   originalname: 'Screenshot_2020-05-03_11-28-10.png',
  //   encoding: '7bit',
  //   mimetype: 'image/png',
  //   destination: 'uploads',
  //   filename: 'Screenshot_2020-05-03_11-28-10-1594568429359.png',
  //   path: 'uploads/Screenshot_2020-05-03_11-28-10-1594568429359.png',
  //   size: 418348
  // }

  if (!file) return next(new AppErr("File not found", 404));

  const filePath = `${__dirname}/../${file.path}`;
  const fileSource = fs.createReadStream(filePath);

  const fileId = await createFile(fileSource);
  const { id } = req.params;

  const updateInfo = {
    $push: { photos: `https://drive.google.com/uc?id=${fileId}` },
  };

  const updatedUser = await updateUserAndAddToken(id, req.token, updateInfo);

  res.json({
    message: "Upload successfully",
    data: updatedUser,
  });

  // Delete file on server
  await unlinkAsync(file.path);
});

exports.authenticateToken = (req, res, next) => {
  // Token placed in authorization property
  const auth = req.headers["authorization"];
  // Bearer Token => split to get token
  const token = auth && auth.split(" ")[1];
  if (!token) return next(new AppErr(`You're not loggin`, 401));
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) next(new AppErr(`Login fail`, 403));
    req.user = user;
    req.token = token;
    next();
  });
};

exports.checkValidID = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else return next(new AppErr("Invalid ID", 404));
});

const getUserByID = async (id, next) => {
  const user = await User.findById(id);
  if (!user) return next(new AppErr("User not found", 404));

  return user;
};

const updateUserAndAddToken = async (id, token, updateInfo) => {
  const updatedUser = await User.findByIdAndUpdate(id, updateInfo, {
    new: true,
  }).select("-password -email");
  const addedTokenUser = { ...updatedUser._doc, token };

  return addedTokenUser;
};
