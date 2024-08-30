import mongoose, { Schema } from "mongoose";
import { IWord } from "../types/wordModel.interface";

const wordSchema: Schema = new Schema(
  {
    word: { type: String, required: true, unique: true },
    answer: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Word = mongoose.model<IWord>("Word", wordSchema, "wordchallenges");

export default Word;
