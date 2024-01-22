import { Express } from "express"
import { Request,Response } from "express"
import roles from "../../model/role_model";

export const postRole = async(req:Request, res:Response):Promise<void>=>{
try{
    const { id ,role_name } = req.body;
    console.log(role_name)
     
    const createRoles = await roles.create({
        id: id,
        role_name:role_name
    },{raw:true} )
    
    console.log(createRoles);
    res.status(201).json({message:`role created.`});
    
}
 catch(error){
    console.error(error);
    res.status(500).send("Internal server error!");
 }   

    
}