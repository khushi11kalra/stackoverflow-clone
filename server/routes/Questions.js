import express from "express";

import {
  AskQuestion
//   ,getAllQuestions,
//   deleteQuestion,
//   voteQuestion,
} from "../controllers/Questions.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/Ask", AskQuestion);


export default router;