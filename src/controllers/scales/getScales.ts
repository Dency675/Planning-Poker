import { Request, Response } from 'express';
import Scales from "../../model/scales";
import Estimations from '../../model/estimations';

export const getScalesByID = async(req: Request, res: Response):Promise<void> => {

try{

        const { estimation_id } = req.query;

        if (!estimation_id) {
            res.status(422).json({error: "Missing Values "});
            return;
          }

        const data = await Scales.findAll({ where: { estimation_id: estimation_id },
            include: [
                {
                    model: Estimations,
                    attributes: ['estimation_name'],
                }],
                 raw: true });
                 console.log({ ...data })
        res.status(500).json({ ...data });

        }catch(error:any){
          console.log(error);
          res.status(500).json({ error:error.toString() });
        }

    }


