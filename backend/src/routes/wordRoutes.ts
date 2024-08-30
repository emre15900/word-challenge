import { Router } from "express";
import {
  getAllWords,
  addNewWord,
  deleteWord,
} from "../controllers/wordController";

const router: Router = Router();

// GET /api/words
router.get("/", getAllWords);

// POST /api/words
router.post("/", addNewWord);

// DELETE /api/words/:id
router.delete("/:id", deleteWord);

export default router;
