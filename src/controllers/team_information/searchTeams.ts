// user.controller.ts
import { Request, Response } from 'express';
import { Op } from "sequelize"; 
import TeamInformation from "../../model/team_information";
import user_information from '../../model/user_information';

export const searchTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const { search } = req.query;

    // Search for users by name
    const userResults = await user_information.findAll({
      where: {
        name: { [Op.like]: `%${search}%` },
      },
    });

    // Search for teams by team_name
    const teamResults = await TeamInformation.findAll({
      where: {
        team_name: { [Op.like]: `%${search}%` },
      },
    });

    console.log(userResults);
    console.log(teamResults);

    res.status(200).json({ userResults,teamResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error' });
  }
};
