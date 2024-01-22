import express from "express";
import { Request, Response } from "express";
import SessionPost from "../controllers/sessions/session_add";

const router = express.Router();

router.post("/SessionPost", (req: Request, res: Response) => {
  SessionPost(req, res);
});

export default router;
