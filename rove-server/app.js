const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const userRoute = require(`${__dirname}/routes/userRoute`);
const messageRoute = require(`${__dirname}/routes/messageRoute`);
const AppErr = require("./utils/appErr");
const globalErrorHandler = require("./controller/errController");

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/messages", messageRoute);

app.all("*", (req, res, next) => {
  console.log("no route found");
  next(new AppErr(`Can't not get ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
