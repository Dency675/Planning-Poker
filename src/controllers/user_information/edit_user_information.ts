
import { Request, Response } from "express";
import UserInformation from "../../model/user_information";

const editUserInformation = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.body; // Assuming the user ID is passed as a route parameter
    const { name, email, employee_id, join_date, last_login_time, status } = req.body;

    // Find the user by ID in the UserInformation table
    const user = await UserInformation.findByPk(userId);

    if (!user) {
      res.status(404).json({
        error: "User not found",
      });
      return;
    }

    // Update user information
    await user.update({
      name,
      email,
      employee_id,
      join_date,
      last_login_time,
      status,
    });

    res.status(200).json({
      message: "User information updated successfully",
      data: user.toJSON(),
    });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};

export default editUserInformation;
