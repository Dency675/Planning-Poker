import { Request, Response } from 'express';
import SessionParticipant from '../../model/session_participants';

const sessionAddParticipant = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const participantData: { session_id: number; user_id: string; user_type: string }[] = req.body;

    if (!participantData || participantData.length === 0) {
      return res.status(400).json({ message: 'No participant data provided' });
    }

    const insertedParticipants = [];

    for (const data of participantData) {
      const existingParticipant = await SessionParticipant.findOne({
        where: {
          session_id: data.session_id,
          user_id: data.user_id
        }
      });

      console.log("existingParticipant")
      console.log(existingParticipant)

      if(existingParticipant)
      return res.status(404).json({ message: "User already in the session" });

      if (!existingParticipant) {
        const participant = await SessionParticipant.create(data);
        insertedParticipants.push(participant);
      }
    }

    return res.status(201).json({
      message: 'Participants added successfully',
      data: insertedParticipants
    });
  } catch (error) {
    console.error('Error adding participants:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default sessionAddParticipant;
