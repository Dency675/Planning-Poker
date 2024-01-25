import express from 'express';
import { Request, Response, Router } from 'express';
import note_user_session_mapping from '../../model/note_user_session_mapping_Model';
import session_

export const getNoteUserMapping = async (req:Request,res:Response) => {
    try{
          
        const {session_participant_id , note_id} =req.query.params

        const value = await note_user_session_mapping.findAll();
            if(value){
                res.status(200).json(value);
            }
            else{
                res.status(404).send('Error!\nNo mapping relations found...');
            }
       
    }
catch(error){
   console.error(error);
   res.status(500).send('Internal server error!');
}

}