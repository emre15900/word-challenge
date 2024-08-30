import { Request, Response } from "express";
import Word from "../models/wordModel";
import { IWord } from "../types/wordModel.interface";

export const getAllWords = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const words: IWord[] = await Word.find().sort({ createdAt: -1 });
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const addNewWord = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { word, answer, image } = req.body;

    const existingWord = await Word.findOne({ word });
    if (existingWord) {
      res.status(400).json({ message: "Word already exists" });
      return;
    }

    const newWord: IWord = new Word({
      word,
      answer,
      image,
    });

    const savedWord = await newWord.save();
    res.status(201).json(savedWord);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deleteWord = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const word = await Word.findByIdAndDelete(id);

    if (!word) {
      res.status(404).json({ message: "Word not found" });
      return;
    }

    res.status(200).json({ message: "Word deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
