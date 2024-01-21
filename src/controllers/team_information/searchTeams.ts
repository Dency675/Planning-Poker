// user.controller.ts
import { Request, Response } from 'express';
import { Op } from "sequelize"; 
import TeamInformation from "../../model/team_information";
// import User from '../../model/user';

export const searchTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const { search } = req.query;

    // // Search for users by name
    // const userResults = await User.findAll({
    //   where: {
    //     name: { [Op.like]: `%${search}%` },
    //   },
    // });

    // Search for teams by team_name
    const teamResults = await TeamInformation.findAll({
      where: {
        team_name: { [Op.like]: `%${search}%` },
      },
    });

    // console.log(userResults);
    console.log(teamResults);

    res.status(200).json({  teamResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error' });
  }
};
