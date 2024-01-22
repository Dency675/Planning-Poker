import express from 'express';
import { Request, Response, Router } from 'express';
import roles from "../../model/role_model";
import TeamInformation from '../../model/team_information';

export const putRole = async (req:Request,res:Response)=> {
    try{
        const role_id = req.query.id ;
        const role_name= req.body.role_name;
        if (!role_name) {
            res.status(400).send('Role name is missing or empty');
            return; // Stop further execution
          }
        const updater = await roles.update(
            {'role_name':role_name,},
             {where: { 'id': role_id }}
            );
            if(updater[0]===1){
                res.status(200).send(`Role no. ${role_id} has been sucessfully changed to: ${role_name}`);
            }else{
                res.status(404).send('Role is not found');
            }
       
    }catch(error){
        console.error(error);
        res.status(500).send('Internal server error!');
     }
    
}