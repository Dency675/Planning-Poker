import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

const noteInformationGet = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const responseData = await NoteInformation.findAll({
      raw: true,
    });

    console.log(responseData);
    res.status(200).json({ message: responseData });
  } catch (error) {
    console.error("Error in noteInformationGet:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationGet;
