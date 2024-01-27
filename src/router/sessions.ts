import express from "express";
import { Request, Response } from "express";
import SessionPost from "../controllers/sessions/session_add";
import onGoingMeetings from "../controllers/sessions/ongoing_meetings"
import recentActivity from "../controllers/sessions/recent_activity";
import SessionGet from "../controllers/sessions/session_get";
import SessionPatch from "../controllers/sessions/session_patch";
import sessionAddParticipant from "../controllers/sessions/session_addParticipant";
import sessionGetParticipants from "../controllers/sessions/sessionGetParticipants";
import sessionGetDevelopers from "../controllers/sessions/sessionGetDevelopers";
import onGoingMeetingsUser from "../controllers/sessions/ongoing_meetingsUser";
import recentActivityUser from "../controllers/sessions/recent_activityUser";


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
router.get("/onGoingMeetingsUser", (req: Request, res: Response) => {
  onGoingMeetingsUser(req, res);
});
router.get("/recentActivity", (req: Request, res: Response) => {
  recentActivity(req, res);
});
router.get("/recentActivityUser", (req: Request, res: Response) => {
  recentActivityUser(req, res);
});

router.post("/sessionAddParticipant", (req: Request, res: Response) => {
  sessionAddParticipant(req, res);
});
router.get("/sessionGetParticipants", (req: Request, res: Response) => {
  sessionGetParticipants(req, res);
});
router.get("/sessionGetDevelopers", (req: Request, res: Response) => {
  sessionGetDevelopers(req, res);
});

export default router;
