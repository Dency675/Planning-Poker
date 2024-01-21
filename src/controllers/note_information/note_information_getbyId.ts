import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

const noteInformationGetById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.query;
    const found = await NoteInformation.findAll({
      raw: true,
      where: { id },
    });

    console.log(found);
    res.status(200).json({ message: found });
  } catch (error) {
    console.error("Error in noteInformationGet:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationGetById;
