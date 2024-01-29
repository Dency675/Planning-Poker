import { Request, Response } from 'express';
import SessionParticipant from '../../model/session_participants';
import UserInformation from '../../model/user_information';

const sessionGetParticipants = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { session_id } = req.query;

    if (!session_id) {
      return res.status(400).json({ message: 'Session ID is required' });
    }

    const participants = await SessionParticipant.findAll({
      where: { session_id, user_type: ['Scrum Master', 'Guest', 'Developer'] }, // Filter by user_type
      include: [
        {
          model: UserInformation,
          attributes: ['name', 'email'], 
          as: 'user'
        }
      ]
    });

    const participantData = participants.map(participant => ({
      user_name: participant.user.name,
      user_email: participant.user.email,
      user_type: participant.user_type
    }));

    participantData.sort((a, b) => {
      const typeOrder = { 'Scrum Master': 1, 'Guest': 2, 'Developer': 3 };
      return typeOrder[a.user_type] - typeOrder[b.user_type];
    });

    return res.status(200).json({
      message: 'Participants retrieved successfully',
      data: participantData
    });
  } catch (error) {
    console.error('Error retrieving participants:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default sessionGetParticipants;
