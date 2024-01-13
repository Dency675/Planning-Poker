import express, { Request, Response,Router } from "express";
import { postEstimations }from '../controllers/estimations/estimationsController'

const router:Router = express.Router();
router.post("/postEstimations", async(req: Request, res: Response) => {
    postEstimations(req,res);
});

