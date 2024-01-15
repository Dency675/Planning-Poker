import { Request, Response } from "express";
import user_stories from "../../model/user_stories";

const update_user_stories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, story_title } = req.body;
    if (!story_title || !id) {
      res.status(404).json({ error: "Bad request" });
    }
    const data = await user_stories.update({ story_title }, { where: { id } });
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
};

export default update_user_stories;
