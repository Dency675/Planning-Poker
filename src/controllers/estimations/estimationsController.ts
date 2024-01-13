import { Request, Response } from 'express';
import Estimations from "../../model/estimations";

export const postEstimations = async(req: Request, res: Response):Promise<void> => {

try{
    const { estimation_name } = req.body;
   
    const newEstimation = await Estimations.create(
          {
            estimation_name,
          },{raw:true} //to get rid of metadata
        );
      
          res.status(201).json({registration_id:newEstimation.estimation_name});
        }catch(error:any){
          console.log(error);
          res.status(500).json({ error:error.toString() });
        }

    }

