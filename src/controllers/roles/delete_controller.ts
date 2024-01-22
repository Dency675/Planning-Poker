import express from 'express';
import { Request, Response, Router } from 'express';
import roles from "../../model/role_model";

export const deleteRole = async (req:Request,res:Response) => {
    try{
        const role_id = req.query.id;

        const value = await roles.destroy({where:{id:role_id}});
            if(value>0){
                res.status(200).json(`Role no. ${role_id} has been successfully deleted`);
            }
            else{
                res.status(404).send('Error!\nRole not found...');
            }
       
    }
catch(error){
   console.error(error);
   res.status(500).send('Internal server error!');
}

}