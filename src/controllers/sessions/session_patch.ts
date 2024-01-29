import { Request, Response } from "express";
import Session from "../../model/sessions";

const SessionPatch = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { session_id, status } = req.body;

    if (!session_id || !status) {
      return res.status(400).json({ message: "Session ID and status are required" });
    }

    const session = await Session.findByPk(session_id);

    if (!session) {
      return res.status(404).json({ message: "Session not found" });
    }

    session.status = status;
    await session.save();

    return res.status(200).json({ message: "Session updated successfully", data: session });
  } catch (error) {
    console.error("Error updating session:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default SessionPatch;
