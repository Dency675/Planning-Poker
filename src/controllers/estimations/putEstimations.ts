import { Request, Response } from 'express';
import Estimations from "../../model/estimations";

export const putEstimations = async(req: Request, res: Response):Promise<void> => {

try{
    const { id,estimation_name } = req.body;
    console.log(estimation_name);
   
    const found = await Estimations.update(
          {
            estimation_name:estimation_name,
          } 
          , { where: { id: id}}
        );
          
        console.log(found);

          res.status(201).json({ message:"Updated" });
        }catch(error:any){
          console.log(error);
          res.status(500).json({ error:error.toString() });
        }

    }

