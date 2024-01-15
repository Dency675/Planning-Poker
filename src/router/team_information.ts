// app.put('/team-information/:id', 
// app.post('/team-information', 
// app.get('/team-information', 
//   app.get('/team-information/:id',

import express, { Request, Response,Router } from "express";

import addTeamInformation from "../controllers/team_information/post_team_information";
import editTeamInformation from "../controllers/team_information/edit_team_information";
import getAllTeamInformation from "../controllers/team_information/get_team_information";
import { getTeamInformation } from "../controllers/team_information/get_team_information";
 
const teamInformationRouter:Router = express.Router();

teamInformationRouter.post("/addTeamInformation", async(req: Request, res: Response) => {
    addTeamInformation(req,res);
});
 
teamInformationRouter.put("/editTeamInformation", async(req: Request, res: Response) => {
    editTeamInformation(req,res);
});

teamInformationRouter.get("/getAllTeamInformation", async(req: Request, res: Response) => {
    getAllTeamInformation(req,res);
});
teamInformationRouter.get("/getTeamInformation", async(req: Request, res: Response) => {
    getTeamInformation(req,res);
});

export default teamInformationRouter;