import { Request, Response } from "express";
import participant_scores from "../../model/participant_scores";

const add_participant_scores = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { team_member_id, user_story_session_mapping_id, story_point } =
      req.body;

    if (!team_member_id || !user_story_session_mapping_id || !story_point) {
      res.status(404).json({ error: "Bad Request" });
    }

    const data = await participant_scores.create(
      {
        team_member_id,
        user_story_session_mapping_id,
        story_point,
      },
      { raw: true }
    );
    res.status(201).json({ message: "Data inserted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.toString() });
  }
};

export default add_participant_scores;
