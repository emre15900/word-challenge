const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
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

app.get("/add-new-word", (req, res) => {
  WordModel.find().then((words) => {
    res.json(words);
  });
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedWord = await WordModel.findByIdAndDelete(id);
    res.status(200).json(deletedWord);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/add-new-word", async (req, res) => {
  try {
    const { word, answer, image } = req.body;

    const existingWord = await WordModel.findOne({ word: word });
    if (existingWord) {
      return res.status(400).json({ error: "Word already exists!" });
    }

    const wordData = new WordModel({
      word: word,
      answer: answer,
      image: image,
    });

    const savedWord = await wordData.save();
    res.status(200).json(savedWord);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => {
  console.log("Server has started on port 4000");
});
