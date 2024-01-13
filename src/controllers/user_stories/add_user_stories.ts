import user_stories from "../../model/user_stories";
import { Request, Response } from "express";

const add_user_stories = async (req: Request, res: Response): Promise<void> => {
  const story = req.body as { story_title: string }[];

  try {
    if (!story || !Array.isArray(story)) {
      res.status(404).json({ error: "Bad Request" });
    }
  } catch {}
};
