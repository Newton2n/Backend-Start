require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/Owner", (req, res) => {
  res.send("Owner is Newton.");
});
app.listen(process.env.PORT, () => {
  console.log(`Hello i am currently running on port number: ${port}`);
});
