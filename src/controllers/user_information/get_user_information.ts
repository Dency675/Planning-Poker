import calculations from "../../model/calculations";
import { Request, Response } from "express";

import user_information from "../../model/user_information";
const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body; // Assuming you're using a GET request with email as a parameter
    const found = await user_information.findOne({
      where: { email: email },
    });

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
    console.error("Error in retrieving User:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error, // Log the entire error object
    });
  }
};
export default getUserById;
