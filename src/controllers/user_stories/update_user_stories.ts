import { Request, Response } from "express";
import user_stories from "../../model/user_stories";

const update_user_stories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, user_story } = req.body;
    if (!user_story || !id) {
      res.status(404).json({ error: "Bad request" });
    }
    const existingStory = await user_stories.findOne({ where: { id } });

    if (!existingStory) {
      res
        .status(404)
        .json({ error: "User story with the provided ID not found" });
      return;
    }

    const data = await user_stories.update({ user_story }, { where: { id } });
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
};

export default update_user_stories;
