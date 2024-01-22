import { Request, Response } from "express";
import participant_scores from "../../model/participant_scores";

const get_participant_scores = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { team_member_id } = req.query;
    if (!team_member_id) {
      res.send(404).json({ error: "Bad Request" });
    }

    const data = await participant_scores.findOne({
      where: { team_member_id },
      raw: true,
    });
    res.status(500).json(data?.story_point);
  } catch {
    (error: any) => {
      res.status(500).json({ error: error.toString() });
    };
  }
};

export default get_participant_scores;
