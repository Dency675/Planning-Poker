import { Request,Response } from "express";
import team_member_information from "../../model/team_member_information";
import team_information from "../../model/team_information";
import user_information from "../../model/user_information";

const get_team_information_by_user_id = async (req:Request,res:Response) => {
    try {
      const { userId } = req.body;

      if (!userId) {
        return res.status(400).json({ error: 'userId is required in the request body' });
      }

      const teamInfoList = await  team_member_information.findAll({
        include: [
          { model: team_information ,
            where: { status: 'active' },
            attributes: ['id', 'team_name'],
          },
          { model: user_information ,
            where: { id: userId, status: 'active' },
            attributes: []
          }
        ],
        where: { status: 'active' },
        attributes: [],
        raw: true,
      });

      if(!teamInfoList.length){
        return res.status(204).send('No Content');
      }
  
      res.status(200).json({teamInfoList});

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

export default get_team_information_by_user_id;