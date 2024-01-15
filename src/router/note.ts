import express from "express";
import { Request, Response } from "express";
import noteInformationGet from "../controllers/note_information/note_information_get";
import noteInformationPost from "../controllers/note_information/note_information_post";
import noteInformationPut from "../controllers/note_information/note_information_put";

const router = express.Router();

router.get("/getNoteInformation", (req: Request, res: Response) => {
  noteInformationGet(req, res);
});

router.post("/postNoteInformation", (req: Request, res: Response) => {
  noteInformationPost(req, res);
});

router.put("/putNoteInformation", (req: Request, res: Response) => {
  noteInformationPut(req, res);
});

export default router;
