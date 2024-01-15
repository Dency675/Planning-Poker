import { Request, Response } from 'express';
import TeamInformation from '../../model/team_information'

// POST /team-information
// app.post('/team-information', 
const addTeamInformation = async (req:Request, res:Response) => {
    try {
      const { team_name, status } = req.body;
      const teamInfo = await TeamInformation.create({ team_name, status });
      res.status(201).json({ message: 'Team information added successfully', teamInfo });
    } catch (error: any) {
      res.status(500).json({ error: error.toString() });
    }
  };

  export default addTeamInformation;