const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  sender: String,
  receiver: String,
  content: String,
  time: {
    type: String,
    default: Date.now(),
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
