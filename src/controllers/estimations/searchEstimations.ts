import Estimations from "../../model/estimations";
import { Request, Response } from 'express';
import { Op } from "sequelize"; 

export const searchEstimations = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { search } = req.query;

      if (!search) {
        res.status(422).json({error: "Missing Values "});
        return;
      }

      const results = await Estimations.findAll({
        where: {
          estimation_name: {
            [Op.like]: `%${search}%`,
          },
        },
      });
   
      console.log(results);
      res.status(200).json({ message: results });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };