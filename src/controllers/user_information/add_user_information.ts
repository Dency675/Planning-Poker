
import { Request, Response } from "express";
import UserInformation from "../../model/user_information";

const addUserInformation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, employee_id, join_date, last_login_time, status } = req.body;

    // Create a new UserInformation record
    const userInformationAdd = await UserInformation.create({
      name,
      email,
      employee_id,
      join_date,
      last_login_time,
      status,
    });

    res.status(200).json({
      message: "User information inserted successfully",
      data: userInformationAdd.toJSON(),
    });
  } catch (error) {
    console.error("Error inserting user information:", error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};

export default addUserInformation;
