import { Request, Response } from 'express';
import Scales from "../../model/scales";

export const postScales = async(req: Request, res: Response):Promise<void> => {

try{
    const { estimation_id, scale_name, scale_value } = req.body;
    // console.log(estimation_name);
   
    if (!scale_name||!estimation_id||!scale_value) {
        res.status(422).json({error: "Missing Values "});
        return;
      }

    const found = await Scales.create(
          {
            estimation_id:estimation_id,
            scale_name:scale_name, 
            scale_value:scale_value
          } 
        );
          
        console.log(found);

          res.status(201).json({ message:"Inserted" });
        }catch(error:any){
          console.log(error);
          res.status(500).json({ error:error.toString() });
        }

    }

