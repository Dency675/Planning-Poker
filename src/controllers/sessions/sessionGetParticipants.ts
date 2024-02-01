import { Request, Response } from "express";
import SessionParticipant from "../../model/session_participants";
import UserInformation from "../../model/user_information";

const sessionGetParticipants = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sessionId } = req.query;

    if (!sessionId) {
      return res.status(400).json({ message: "Session ID is required" });
    }

    const participants = await SessionParticipant.findAll({
      where: {
        sessionId: sessionId,
        userType: ["Scrum Master", "Guest", "Developer"],
      },
      include: [
        {
          model: UserInformation,
          attributes: ["name", "email"],
          as: "user",
        },
      ],
    });

    const participantData = participants.map((participant) => ({
      userName: participant.user.name,
      userEmail: participant.user.email,
      userType: participant.userType,
    }));

    participantData.sort((a, b) => {
      const typeOrder = { "Scrum Master": 1, Guest: 2, Developer: 3 };
      return typeOrder[a.userType] - typeOrder[b.userType];
    });

    return res.status(200).json({
      message: "Participants retrieved successfully",
      data: participantData,
    });
  } catch (error) {
    console.error("Error retrieving participants:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default sessionGetParticipants;
