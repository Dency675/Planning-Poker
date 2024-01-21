import add_user_stories from "../controllers/user_stories/add_user_stories";
import get_user_stories from "../controllers/user_stories/get_user_stories";
import update_user_stories from "../controllers/user_stories/update_user_stories";
import get_all_user_stories from "../controllers/user_stories/get_all_user_stories";
import express from "express";
import { Request, Response } from "express";
const user_stories_router = express.Router();

user_stories_router.post(
  "/add_user_stories",
  async (req: Request, res: Response) => {
    add_user_stories(req, res);
  }
);

user_stories_router.get(
  "/get_user_stories",
  async (req: Request, res: Response) => {
    get_user_stories(req, res);
  }
);

user_stories_router.get(
  "/get_all_user_stories",
  async (req: Request, res: Response) => {
    get_all_user_stories(req, res);
  }
);

user_stories_router.patch(
  "/update_user_stories",
  async (req: Request, res: Response) => {
    update_user_stories(req, res);
  }
);

export default user_stories_router;
