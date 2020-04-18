const express = require("express");
const app = express();
require("dotenv").config(); // load .env contents into process.env
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
