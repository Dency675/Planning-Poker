import express, { Request, Response,Router } from "express";
import { postEstimations }from '../controllers/estimations/postEstimations'
import { getEstimations }from '../controllers/estimations/getEstimations'
import { putEstimations }from '../controllers/estimations/putEstimations'

const router:Router = express.Router();
router.post("/postEstimations", async(req: Request, res: Response) => {
    postEstimations(req,res);
});

router.get("/getEstimations", async(req: Request, res: Response) => {
    getEstimations(req,res);
});

router.put("/putEstimations", async(req: Request, res: Response) => {
    putEstimations(req,res);
});


export default router;