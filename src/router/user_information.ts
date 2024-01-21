import express from "express";
import { Request, Response } from "express";
import noteInformationAdd from "../controllers/note_information/note_information_post";
import addUserInformation from "../controllers/user_information/add_user_information";
import getAllUsers from "../controllers/user_information/get_user_information";
import editUserInformation from "../controllers/user_information/edit_user_information";
import getUserById from "../controllers/user_information/get_user_information";

const userinformationRouter = express.Router();
userinformationRouter.post("/adduser", (req: Request, res: Response) => {
    addUserInformation(req, res);    
});

userinformationRouter.post("/getuser", (req: Request, res: Response) => {
    getUserById(req, res);    
});

userinformationRouter.patch("/edituser", (req: Request, res: Response) => {
    editUserInformation(req, res);    
});
export default userinformationRouter;
