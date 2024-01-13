import express from "express";
import { Request, Response } from "express";
import noteInformationAdd from "../controllers/note_information/note_information_post";

const router = express.Router();
router.get("/customerProfile", (req: Request, res: Response) => {
  noteInformationAdd(req, res);
});
