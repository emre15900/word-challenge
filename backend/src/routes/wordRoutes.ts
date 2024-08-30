import { Router } from "express";
import {
  getAllWords,
  addNewWord,
  deleteWord,
} from "../controllers/wordController";

const router: Router = Router();

router.get("/", getAllWords);
router.post("/", addNewWord);
router.delete("/:id", deleteWord);

export default router;
