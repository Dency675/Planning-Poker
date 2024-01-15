import calculations from "../../model/calculations";
import { Request, Response } from "express";

// Function for retrieving calculations
const get_calculations = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body;
    const found = await calculations.findOne({
      where: { id: id }, // Assuming "e_mail" is a field in your calculations model
    });

    // Check if a record is found
    if (found) {
      res.status(200).json({
        message: "Data retrieved successfully",
        data: found,
      });
    } else {
      res.status(404).json({
        message: "Data not found",
      });
    }
  } catch (error) {
    console.error("Error in calculationsGet:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default get_calculations;
