import { Request, Response } from 'express';
import TeamInformation from '../../model/team_information'

/**
 * Handles the creation of a new note in the NoteInformation model.
 *
 * @param {Request} req - Express Request object containing client data.
 * @param {Response} res - Express Response object for sending the server's response.
 * @returns {Promise<void>} A JSON response indicating the success or failure of the operation.
 */

// GET /team-information
// app.get('/team-information', 

const getAllTeamInformation = async (req:Request, res:Response) => {
    try {
      const teamInfoList = await TeamInformation.findAll();
      res.status(200).json({ teamInfoList });
    } catch (error: any) {
      res.status(500).json({ error: error.toString() });
    }
  };
  
  // GET /team-information/:id
//   app.get('/team-information/:id',
  const getTeamInformation = async (req:Request, res:Response) => {
    try {
      const { id } = req.params;
      const teamInfo = await TeamInformation.findByPk(id);
      if (!teamInfo) {
        res.status(404).json({ message: 'Team information not found' });
      } else {
        res.status(200).json({ teamInfo });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.toString() });
    }
  };

  export default getAllTeamInformation;
  export { getTeamInformation };