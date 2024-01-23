import { Request, Response } from 'express';
import Session from '../../model/sessions';

const onGoingMeetings = async (req: Request, res: Response) => {
    try {
      const { team_id } = req.body;
  
      if (!team_id ) {
        return res.status(400).json({ error: 'team_id is required in the request body' });
      }
  
      // Fetch sessions with the given team_id and status 'active'
      const ongoingSessions = await Session.findAll({
        attributes: ['session_title', 'create_date_time'],
        where: {
          team_id,
          status: 'active',
        },
      });
      
      if(!ongoingSessions.length) {
        return res.status(204).send('No Content');
      }

      res.json(ongoingSessions);
    } 
    
    catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
export default onGoingMeetings;