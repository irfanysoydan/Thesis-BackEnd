const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const router = require("../src/routes");
const { errorHandlerMiddleware } = require("./middlewares/errorHandler.js");

const app = express();
app.use(cookieParser());
app.use(express.json());
dotenv.config();
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port: 3000");
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database connection is succesfull");
    })
    .catch((err) => {
      console.log("Can`t connect to DB");
    });
});
