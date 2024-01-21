import express from 'express';
import { Request, Response, Router } from 'express';
import roles from '../model/role_model';
import { postRole } from '../controllers/roles/post_controller';
import { getRole } from '../controllers/roles/get_controller';
import { putRole } from '../controllers/roles/put_controller';

const role_router = express.Router();

role_router.post("/rolerouter", (req: Request, res: Response) => {
    postRole(req, res);
});

role_router.get("/rolerouter",(req:Request,res:Response) => {
    getRole(req,res);
});

role_router.put("/rolerouter",(req:Request,res:Response) => {
    putRole(req,res);
});

export default role_router;