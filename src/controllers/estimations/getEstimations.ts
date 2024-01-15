import { Request, Response } from 'express';
import Estimations from "../../model/estimations";

export const getEstimations = async(req: Request, res: Response):Promise<void> => {

try{

        const { estimation_name } = req.query;

        const data = await Estimations.findAll({ where: { estimation_name: estimation_name }, raw: true });
        res.status(500).json({ ...data });

        }catch(error:any){
          console.log(error);
          res.status(500).json({ error:error.toString() });
        }

    }

