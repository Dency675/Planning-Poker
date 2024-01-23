import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

const noteInformationDelete = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.query;

    if (!id) {
      res.status(422).json({
        error: "note_id is missing ",
      });
      return;
    }

    const responseData = await NoteInformation.destroy({
      where: { id: id },
    });

    console.log(responseData);
    res.status(200).json({ message: `successfully deleted ${id}` });
  } catch (error) {
    console.error("Error in noteInformationGet:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationDelete;
