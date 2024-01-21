import { Request, Response } from "express";
import user_story_session_mapping from "../../model/user_story_session_mapping";

const add_user_story_session_mapping = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      user_story_id,
      session_id,
      round_number,
      comment,
      story_point_result,
    } = req.body;

    if (
      !user_story_id ||
      !session_id ||
      !round_number ||
      !comment ||
      !story_point_result
    ) {
      res.status(404).json({ error: "Bad Request" });
    }

    const data = await user_story_session_mapping.create(
      {
        user_story_id,
        session_id,
        round_number,
        comment,
        story_point_result,
      },
      { raw: true }
    );
    res.status(201).json({ message: "Data inserted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
};

export default add_user_story_session_mapping;
