import { Request, Response } from 'express';
import Estimations from "../../model/estimations";

export const postEstimations = async(req: Request, res: Response):Promise<void> => {

try{
    const { estimation_name } = req.body;
    console.log(estimation_name);
   
    if (!estimation_name) {
      res.status(422).json({error: "Missing Estimation Name "});
      return;
    }

    const found = await Estimations.create(
          {
            estimation_name:estimation_name,
          } 
        );
          
        console.log(found);

          res.status(201).json({ message:"Inserted" });
        }catch(error:any){
          console.log(error);
          res.status(500).json({ error:error.toString() });
        }

    }

