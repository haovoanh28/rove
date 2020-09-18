require("dotenv").config();

const app = require("./app");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");

const Message = require("./models/messageModel");

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connect to MongoDB successfully"));

const port = process.env.PORT || 8000;

//const server = http.createServer(app);

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  // console.log(id);
  // console.log("a user has connected");
  socket.join(id);

  socket.on("send-message", ({ recipient, message }) => {
    Message.create({
      sender: id,
      receiver: recipient,
      content: message,
    });
    socket.broadcast.to(recipient).emit("receive-message", {
      sender: id,
      message,
    });
  });
});

http.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
