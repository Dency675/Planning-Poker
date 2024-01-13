import calculations from "../../model/calculations";
import { Request,Response } from "express";
import crypto from 'crypto'


//function
/**
 * Handles the creation of a new note in the NoteInformation model.
* * jghjkkj
 * @param {Request} req - Express Request object containing client data.
 * @param {Response} res - Express Response object for sending the server's response.
 * @returns {Promise<void>} A JSON response indicating the success or failure of the operation.
 */
const add_calculations =async (req:Request,res:Response) : Promise<void> => {
try {
    const { calculation_name } = req.body;

    // Create a new EcSuppliers record
    const calculationsAdd = await calculations.create({
     calculation_name
    });

    res.status(200).json({
      message: "Data inserted successfully",
      data: calculationsAdd.toJSON(),
    });

  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({
      error: "Server Error",
    });
  }
}

export default add_calculations;
// export {customerProfile}


