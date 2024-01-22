import express from "express";
import { Request, Response } from "express";
const user_story_mapping_router = express.Router();
import add_user_story_session_mapping from "../controllers/user_story_mapping/add_user_story_mapping";
import getUserStoryCountsBySession from "../controllers/user_story_mapping/get_UserStoryCount";

user_story_mapping_router.post(
  "/add_user_story_mapping",
  async (req: Request, res: Response) => {
    add_user_story_session_mapping(req, res);
  }
);

user_story_mapping_router.get(
  "/getCount",
  async (req: Request, res: Response) => {
    getUserStoryCountsBySession(req, res);
  }
);

export default user_story_mapping_router;
