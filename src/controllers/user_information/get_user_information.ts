import { Request, Response } from "express";
import UserInformation from "../../model/user_information";

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.body; // Assuming the user ID is passed in the request body
    
    // Find user by ID in the UserInformation table
      const user = await UserInformation.findOne({
      where: { id: id }, // Assuming "e_mail" is a field in your calculations model
    });
console.log("User:", user);
    if (!user) {
      res.status(404).json({
        error: "User not found",
      });
      return;
    }

    res.status(200).json({
      message: "User information retrieved successfully",
      data: user.toJSON(),
    });
  } catch (error) {
    console.error("Error retrieving user information:", error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};

export default getUserById;
