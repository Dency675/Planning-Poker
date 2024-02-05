import express from "express";
import { Request, Response, Router } from "express";
// import note_user_session_mapping from "../model/note_user_session_mapping_Model";
import { getNoteUserMapping } from "../controllers/note_user_session_mapping/get_controller";
import { postNoteUserMapping } from "../controllers/note_user_session_mapping/post_controller";
import { putNoteUserMapping } from "../controllers/note_user_session_mapping/put_controller";
import { getByIDNoteUserMapping } from "../controllers/note_user_session_mapping/get_by_id_controller";

const note_user_map_router: Router = express.Router();

note_user_map_router.get(
  "/getAllNoteUserMap",
  (req: Request, res: Response) => {
    getNoteUserMapping(req, res);
  }
);
note_user_map_router.get(
  "/getByIDNoteUserMap",
  (req: Request, res: Response) => {
    getByIDNoteUserMapping(req, res);
  }
);
note_user_map_router.post("/postNoteUserMap", (req: Request, res: Response) => {
  postNoteUserMapping(req, res);
});

note_user_map_router.put("/putNoteUserMap", (req: Request, res: Response) => {
  putNoteUserMapping(req, res);
});

export default note_user_map_router;
