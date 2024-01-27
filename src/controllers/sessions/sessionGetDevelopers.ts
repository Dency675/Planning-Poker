import { Request, Response } from 'express';
import SessionParticipant from '../../model/session_participants';
import UserInformation from '../../model/user_information';

const sessionGetDevelopers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { session_id } = req.query;

    if (!session_id) {
      return res.status(400).json({ message: 'Session ID is required' });
    }

    const participants = await SessionParticipant.findAll({
      where: { session_id, user_type: [ 'Developer'] }, 
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


    return res.status(200).json({
      message: 'Participants retrieved successfully',
      data: participantData
    });
  } catch (error) {
    console.error('Error retrieving participants:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default sessionGetDevelopers;
