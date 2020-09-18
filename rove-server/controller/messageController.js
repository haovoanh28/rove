const catchAsync = require("../utils/catchAsync");
const AppErr = require("./../utils/appErr");

const Message = require("../models/messageModel");

exports.getMessages = catchAsync(async (req, res, next) => {
  const { sender, receiver } = req.query;
  console.log(`sender is ${sender}, receiver is ${receiver}`);
  if (!sender || !receiver) {
    return next(
      new AppErr("Sender or Receiver are not in correct format", "400")
    );
  }

  let messages1 = await Message.find({
    //sender: { $in: [`${sender}`, `${receiver}`] },
    sender: sender,
    receiver: receiver,
  });

  let message2 = await Message.find({
    //receiver: { $in: [`${sender}`, `${receiver}`] },
    sender: receiver,
    receiver: sender,
  });

  const messages = messages1.concat(message2).sort((message1, message2) => {
    if (message1._id > message2._id) {
      return 1;
    } else if (message1._id < message2._id) {
      return -1;
    } else {
      return 0;
    }
  });

  res.status(200).json({
    status: "Success",
    data: messages,
  });
});
