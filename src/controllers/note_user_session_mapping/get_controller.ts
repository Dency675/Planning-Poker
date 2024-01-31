import express from 'express';
import { Request, Response, Router } from 'express';

note_associations();
//const results = await MainModel.findAll({ include: [ JoinedModel ] }) as Array<MainModel & {JoinedModel: JoinedModel}>;
import note_user_session_mapping from '../../model/note_user_session_mapping_Model';
import NoteInformation from '../../model/note_information';
// import session_participants from '../../model/session_participants';

export const getNoteUserMapping = async (req:Request,res:Response) => {
    try{
          const session_id="9078110";
          const note_id = "78789"
        // const {session_id , note_id} =req.query.params

        const value = await note_user_session_mapping.findOne({include:[{model: NoteInformation, attributes:['id'],as:'notes_id'},{model:session_participants ,attributes:['id'], as:'sessions_id'} ]},{where:{[Op.and]:{[sessions_id:session_id],[notes_id:note_id]}});

       
    }
catch(error){
   console.error(error);
   res.status(500).send('Internal server error!');
}

}