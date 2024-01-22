import express from 'express';
import { Request, Response, Router } from 'express';
import roles from "../../model/role_model";

export const getRoleByID = async (req:Request,res:Response) => {
    try{
        const role_id = req.query.id;

        const value = await roles.findOne({ 
            where:{ id: role_id } });
            if(value){
                res.status(200).json(value);
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