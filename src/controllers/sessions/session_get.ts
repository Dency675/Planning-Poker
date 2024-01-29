import { Request, Response } from "express";
import Session from "../../model/sessions";
import Team from "../../model/team_information";
import User from "../../model/user_information";
import Estimation from "../../model/estimations";
import Calculation from "../../model/calculations";
import SessionParticipants from "../../model/session_participants";
import { Sequelize } from "sequelize";

const SessionGet = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {

    const { session_id } = req.query;

    const sessions = await Session.findOne({
        where:{id:session_id},
      include: [
          { model: Team, as: 'team' },
          { model: User, as: 'scrumMaster' },
          { model: Estimation, as: 'estimation' },
          { model: Calculation, as: 'calculation' },
          { model: SessionParticipants, as: 'participants', attributes: [] },
      ],
    attributes: [
        'id',
        'session_title',
        'create_date_time',
        'timer',
        'excel_link',
        'estimation_id',
        'calculation_id',
        'status',
        [Sequelize.fn('COUNT', Sequelize.col('participants.id')), 'participant_count'] 
      ],
      group: ['Session.id'] 
    });

    if (!sessions) {
        return res.status(404).json({ message: "Session not found" });
      }

    const formattedSessions = {
      id: sessions.id,
      session_title: sessions.session_title,
      create_date_time: sessions.create_date_time,
      timer: sessions.timer,
      excel_link: sessions.excel_link,
      estimation_id: sessions.estimation_name,
      calculation_id: sessions.calculation_name,
      status: sessions.status,
      team_name: sessions.team?.team_name,
      scrumMaster_id: sessions.scrumMaster?.id,
      scrumMaster_name: sessions.scrumMaster?.name,
      scrumMaster_email: sessions.scrumMaster?.email,
      scrumMaster_employee_id: sessions.scrumMaster?.employee_id,
      estimation_name: sessions.estimation?.estimation_name,
      calculation_name: sessions.calculation?.calculation_name,
      participant_count: sessions.getDataValue('participant_count')
    };

    return res.status(200).json({ message: "Sessions retrieved successfully", data: formattedSessions });
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default SessionGet;


