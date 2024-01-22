import express, { Request, Response, Router } from "express";
import add_calculations from "../controllers/calculations/add_calculations";
import calculationsGet from "../controllers/calculations/get_calculations";

const calculationsrouter: Router = express.Router();
calculationsrouter.post(
  "/addcalculations",
  async (req: Request, res: Response) => {
    add_calculations(req, res);
  }
);

calculationsrouter.get(
  "/getcalculations",
  async (req: Request, res: Response) => {
    calculationsGet(req, res);
  }
);
export default calculationsrouter;
