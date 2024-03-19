const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const WordModel = require("./models/WordModel");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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

app.post("/add-new-word", (req, res) => {
  try {
    const word = req.body.word;
    const answer = req.body.answer;
    const image = req.body.image;

    const wordData = new WordModel({
      word: word,
      answer: answer,
      image: image,
    });

    const words = wordData
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });

    res.status(200).json(words);
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {
  console.log("Server has started on port 4000");
});
