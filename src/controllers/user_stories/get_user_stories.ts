import { Request, Response } from "express";
import user_stories from "../../model/user_stories";

const get_user_stories = async (req: Request, res: Response): Promise<void> => {
  try {
    const { story_title } = req.query;
    if (!story_title) {
      res.send(404).json({ error: "Bad Request" });
    }

    const data = await user_stories.findOne({
      where: { story_title },
      raw: true,
    });
    res.status(500).json(data);
  } catch {
    (error: any) => {
      res.status(500).json({ error: error.toString() });
    };
  }
};
export default get_user_stories;
