import express from "express";
import { Request, Response } from "express";
import SessionPost from "../controllers/sessions/session_add";
import onGoingMeetings from "../controllers/sessions/ongoing_meetings"
import recentActivity from "../controllers/sessions/recent_activity";
import SessionGet from "../controllers/sessions/session_get";
import SessionPatch from "../controllers/sessions/session_patch";


const router = express.Router();

router.post("/SessionPost", (req: Request, res: Response) => {
  SessionPost(req, res);
});
router.get("/SessionGet", (req: Request, res: Response) => {
  SessionGet(req, res);
});
router.patch("/SessionPatch", (req: Request, res: Response) => {
  SessionPatch(req, res);
});
router.get("/onGoingMeetings", (req: Request, res: Response) => {
  onGoingMeetings(req, res);
});
router.get("/recentActivity", (req: Request, res: Response) => {
  recentActivity(req, res);
});

export default router;
