import { Request, Response } from 'express';
import Estimations from "../../model/estimations";

export const deleteEstimations = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;

    const deletedCount = await Estimations.destroy({
      where: { id: id }
    });

    if (deletedCount > 0) {
      res.status(200).json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ error: "Estimation not found" });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.toString() });
  }
};
