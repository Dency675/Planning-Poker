import { Request, Response } from 'express';
import TeamInformation from '../../model/team_information'


const editTeamInformation = async (req:Request, res:Response) => {
    try {
      const { team_name, status } = req.body;
      const id = req.query.id;
      console.log(id)


      console.log(team_name)
      const teamInfo = await TeamInformation.update({ team_name, status }, { where: { id } });
      if (teamInfo[0])
        res.status(200).json({ message: 'Team information updated successfully', teamInfo });
      else
        res.status(402).json({ message: 'ID not found', teamInfo });
    } catch (error: any) {
      res.status(500).json({ error: error.toString() });
    }
  };

export default editTeamInformation;