import user_stories from "../../model/user_stories";
import { Request, Response } from "express";

/**
 *
 *
 * @param {Request} req - Express Request object containing client data.
 * @param {Response} res- Express Response object for sending the server's response.
 * @returns {Promise<void>} A JSON response indicating the success or failure of the operation.
 */
const add_user_stories = async (req: Request, res: Response): Promise<void> => {
  const story = req.body as { user_story: string };

  try {
    if (!story) {
      res.status(404).json({ error: "Bad Request" });
    }
    const data = await user_stories.create(
      {
        user_story: story.user_story,
      },
      { raw: true }
    );
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
};

export default add_user_stories;
