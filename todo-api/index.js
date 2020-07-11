require("dotenv").config(); // load .env contents into process.env

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users/:id/todos", loginRequired, ensureCorrectUser, todoRoutes);
app.use("/api/auth", authRoutes);

app.use(function (req, res, next) {
  let error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
