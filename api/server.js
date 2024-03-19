const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const WordModel = require("./models/WordModel");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://emresayin355:aUXq3UfiTJ31Uxf1@cluster0.x6cr7m6.mongodb.net/?retryWrites=true&w=majority&appName=words"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
  console.log("Server has started on port 4000");
});
