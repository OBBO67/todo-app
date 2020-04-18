const express = require("express");
const app = express();
require("dotenv").config(); // load .env contents into process.env
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
