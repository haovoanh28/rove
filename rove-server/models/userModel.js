const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 1,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 1,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
    default: "Unidentified",
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  introduction: {
    type: String,
  },
  interests: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  photos: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  nation: {
    type: String,
    default: "Unknown",
  },
});

userSchema.pre("save", async function (next) {
  // Salting password
  this.password = await bcrypt.hash(this.password, 10);

  // Generate default URL for user's avatar
  if (this.gender.toLowerCase() === "male") {
    this.avatar =
      "https://drive.google.com/uc?id=1kxhy6acJs4a7ojuwKK9OXAZKSxYmgqum";
  } else if (this.gender.toLowerCase() === "female") {
    this.avatar =
      "https://drive.google.com/uc?id=1mMoyA6USjUbbWu5jRVgrSv_3rBX5sA4V";
  } else {
    this.avatar =
      "https://drive.google.com/uc?id=1V-dRcYt2pEa4Efmwm9QsDX13LD9uZne2";
  }

  this.age =
    new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear();
  console.log(this.age);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
