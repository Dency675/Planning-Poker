import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

const noteInformationDelete = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.query;
    const found = await NoteInformation.destroy({
      where: { id: id },
    });

    console.log(found);
    res.status(200).json({ message: `successfully deleted ${id}` });
  } catch (error) {
    console.error("Error in noteInformationGet:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationDelete;
