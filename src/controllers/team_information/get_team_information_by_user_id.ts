import { Request,Response } from "express";
import team_member_information from "../../model/team_member_information";
import team_information from "../../model/team_information";
import user_information from "../../model/user_information";
const get_team_information_by_user_id = async (req:Request,res:Response) => {
    try {
      const { userId } = req.body;

  
      // Use Sequelize to fetch all teams information for the user
      const teamsInfo = await team_information.findAll({
        include: [
          {
            model: team_member_information,
            where: { status: 'active' },
            include: [
              {
                model: user_information,
                where: { id: userId, status: 'active' },
              },
            ],
          },
        ],
        attributes: ['id', 'team_name', 'status'],
      });

      const result = await  user_information.findAll({
        include: [
          { model: team_member_information }
        ],
      });
      
      
      if (!teamsInfo || teamsInfo.length === 0) {
        return res.status(404).json({ error: 'User is not part of any active teams',result });
      }
  
      // Extract relevant information from the retrieved data
      const teamsData = teamsInfo.map((team) => ({
        teamId: team.id,
        teamName: team.team_name,
        status: team.status,
        // Add other fields as needed
      }));
  
      res.status(200).json(teamsData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

export default get_team_information_by_user_id;