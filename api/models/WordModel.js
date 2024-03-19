const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema(
  {
    word: {
      type: String,
      required: true,
      unique: true,
    },
    answer: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WordChallenge", WordSchema);
