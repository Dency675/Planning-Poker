import express from "express";
import { Request, Response } from "express";
const participant_scores_router = express.Router();
import add_participant_scores from "../controllers/participant_scores/add_participant_scores";
import get_participant_scores from "../controllers/participant_scores/get_participant_scores";

participant_scores_router.post(
  "/add_participant_scores",
  async (req: Request, res: Response) => {
    add_participant_scores(req, res);
  }
);

participant_scores_router.get(
  "/get_participant_scores",
  async (req: Request, res: Response) => {
    get_participant_scores(req, res);
  }
);

export default participant_scores_router;
