import express from "express";
import { Request, Response } from "express";
import noteInformationGet from "../controllers/note_information/note_information_get";
import noteInformationPost from "../controllers/note_information/note_information_post";
import noteInformationPut from "../controllers/note_information/note_information_put";
import noteInformationGetById from "../controllers/note_information/note_information_getbyId";
import noteInformationSearch from "../controllers/note_information/note_information_search";
import noteInformationSort from "../controllers/note_information/note_information_sort";

const router = express.Router();

router.get("/getNoteInformation", (req: Request, res: Response) => {
  noteInformationGet(req, res);
});

router.get("/getNoteInformationById", (req: Request, res: Response) => {
  noteInformationGetById(req, res);
});

router.post("/postNoteInformation", (req: Request, res: Response) => {
  noteInformationPost(req, res);
});

router.put("/putNoteInformation", (req: Request, res: Response) => {
  noteInformationPut(req, res);
});

router.put("/noteInformationSearch", (req: Request, res: Response) => {
  noteInformationSearch(req, res);
});

router.put("/noteInformationSort", (req: Request, res: Response) => {
  noteInformationSort(req, res);
});

export default router;
