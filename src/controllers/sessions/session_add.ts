import { Request, Response } from "express";
import Session from "../../model/sessions";

import SessionParticipants from "../../model/session_participants"

interface SessionPostResponse {
  message: string;
  data: Session;
}

const SessionPost = async (
  req: Request,
  res: Response
): Promise<Response<SessionPostResponse>> => {
  try {
    const {
      session_title,
      create_date_time,
      timer,
      excel_link,
      team_id,
      scrum_master_id,
      estimation_id,
      calculation_id,
      status,
    }: Session = req.body;

    if (
      !session_title ||
      !create_date_time ||
      !excel_link ||
      !team_id ||
      !scrum_master_id ||
      !estimation_id ||
      !calculation_id ||
      !status
    ) {
      return res
        .status(400)
        .send("data missing")
        .json({ message: "Missing required fields" });
    }

    const newSession = await Session.create({
      session_title,
      create_date_time,
      timer,
      excel_link,
      team_id,
      scrum_master_id,
      estimation_id,
      calculation_id,
      status,
    });

    const responseData: SessionPostResponse = {
      message: "Session created successfully",
      data: newSession,
    };

    return res.status(201).json(responseData);
  } catch (error) {
    console.error("Error creating session:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default SessionPost;
