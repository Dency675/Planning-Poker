import { Request, Response } from 'express';
import TeamInformation from '../../model/team_information'

// PUT /team-information/:id
// app.put('/team-information/:id', 
const editTeamInformation = async (req:Request, res:Response) => {
    try {
      const { team_name, status } = req.body;
      const { id } = req.params;
      const teamInfo = await TeamInformation.update({ team_name, status }, { where: { id } });
      res.status(200).json({ message: 'Team information updated successfully', teamInfo });
    } catch (error: any) {
      res.status(500).json({ error: error.toString() });
    }
  };

export default editTeamInformation;