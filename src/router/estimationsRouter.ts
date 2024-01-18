import express, { Request, Response,Router } from "express";
import { postEstimations }from '../controllers/estimations/postEstimations'
import { getEstimations, getEstimationsByID }from '../controllers/estimations/getEstimations'
import { putEstimations }from '../controllers/estimations/putEstimations'
import { deleteEstimations }from '../controllers/estimations/deleteEstimations'

const router:Router = express.Router();
router.post("/postEstimations", async(req: Request, res: Response) => {
    postEstimations(req,res);
});

router.get("/getEstimations", async(req: Request, res: Response) => {
    getEstimations(req,res);
});

router.get("/getEstimationsByID", async(req: Request, res: Response) => {
    getEstimationsByID(req,res);
});

router.put("/putEstimations", async(req: Request, res: Response) => {
    putEstimations(req,res);
});

router.patch("/deleteEstimations", async(req: Request, res: Response) => {
    deleteEstimations(req,res);
});


export default router;