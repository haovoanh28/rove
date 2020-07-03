const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const [name, extend] = file.originalname.split('.');
    cb(null, name + "-" + Date.now() + "." + extend);
  },
});

const upload = multer({ storage: storage });

const {
  getAllUser,
  createUser,
  userLogin,
  getUser,
  updateUser,
  changeAvatar,
  checkValidID,
  authenticateToken,
} = require(`./../controller/userController`);

const router = express.Router();

router.post("/login", userLogin);

// To sign up a user, go to url /api/v1/users with method POST

router.route("/").get(authenticateToken, getAllUser).post(createUser);

router
  .route("/:id")
  .get(authenticateToken, checkValidID, getUser)
  .patch(authenticateToken, checkValidID, updateUser);

router.route("/:id/avatar").patch(authenticateToken, upload.single("avatar"), checkValidID, changeAvatar);

module.exports = router;
