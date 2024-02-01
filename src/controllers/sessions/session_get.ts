import { Request, Response } from "express";
import Session from "../../model/sessions";
import Team from "../../model/team_information";
import User from "../../model/user_information";
import Estimation from "../../model/estimations";
import Calculation from "../../model/calculations";
import SessionParticipants from "../../model/session_participants";
import { Sequelize } from "sequelize";

const SessionGet = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { sessionId } = req.query;

    const sessions = await Session.findOne({
      where: { id: sessionId },
      include: [
        { model: Team, as: "team" },
        { model: User, as: "scrumMaster" },
        { model: Estimation, as: "estimation" },
        { model: Calculation, as: "calculation" },
        { model: SessionParticipants, as: "participants", attributes: [] },
      ],
      attributes: [
        "id",
        "sessionTitle",
        "createDateTime",
        "timer",
        "excelLink",
        "estimationId",
        "calculationId",
        "status",
        [
          Sequelize.fn("COUNT", Sequelize.col("participants.id")),
          "participantCount",
        ],
      ],
      group: ["Session.id"],
    });

    if (!sessions) {
      return res.status(404).json({ message: "Session not found" });
    }

    const formattedSessions = {
      id: sessions.id,
      sessionTitle: sessions.sessionTitle,
      createDateTime: sessions.createDateTime,
      timer: sessions.timer,
      excelLink: sessions.excelLink,
      estimationId: sessions.estimationName,
      calculationId: sessions.calculationName,
      status: sessions.status,
      teamName: sessions.team?.teamName,
      scrumMasterId: sessions.scrumMaster?.id,
      scrumMasterName: sessions.scrumMaster?.name,
      scrumMasterEmail: sessions.scrumMaster?.email,
      scrumMasterEmployeeId: sessions.scrumMaster?.employeeId,
      estimationName: sessions.estimation?.estimationName,
      calculationName: sessions.calculation?.calculationName,
      participantCount: sessions.getDataValue("participantCount"),
    };

    return res.status(200).json({
      message: "Sessions retrieved successfully",
      data: formattedSessions,
    });
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default SessionGet;
