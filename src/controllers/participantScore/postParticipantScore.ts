// import { Request, Response } from 'express';
// import ParticipantScore from '../../model/participant_score';

// export const postParticipantScore = async(req: Request, res: Response):Promise<void> => {

// try{
//     const { estimation_id, scale_name, scale_value } = req.body;
   
//     const found = await ParticipantScore.create(
//           {
//             estimation_id:estimation_id,
//             scale_name:scale_name, 
//             scale_value:scale_value
//           } 
//         );
          
//         console.log(found);

//           res.status(201).json({ message:"Inserted" });
//         }catch(error:any){
//           console.log(error);
//           res.status(500).json({ error:error.toString() });
//         }

//     }

