import express from 'express';
import { Request, Response, Router } from 'express';
import note_user_session_mapping from '../../model/note_user_session_mapping_Model';

export const putNoteUserMapping = async (req:Request,res:Response) => {
    try{

       
    }
catch(error){
   console.error(error);
   res.status(500).send('Internal server error!');
}

}