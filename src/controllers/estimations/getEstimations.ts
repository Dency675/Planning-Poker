import { Request, Response } from 'express';
import Estimations from "../../model/estimations";

export const getEstimationsByID = async(req: Request, res: Response):Promise<void> => {

try{

        const { estimation_name } = req.query;

        if (!estimation_name) {
          res.status(422).json({error: "Missing Estimation Name "});
          return;
        }

        const data = await Estimations.findOne({ where: { estimation_name: estimation_name }, raw: true });
        if(data){
          res.status(500).json({ ...data });
        }
        else{
          res.status(500).json({ error:"Data Doesnt exist" });
        }

        }catch(error:any){
          console.log(error);
          res.status(500).json({ error:"Data Doesnt exist" });
        }

    }

    export const getEstimations = async(req: Request, res: Response):Promise<void> => {

      try{
      
              const data = await Estimations.findAll({ raw: true });
              res.status(500).json({ ...data });
      
              }catch(error:any){
                console.log(error);
                res.status(500).json({ error:error.toString() });
              }
      
          }

