import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

const noteInformationPut = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { note_id, new_content } = req.body;
    console.log(note_id);

    const updatedNote = await NoteInformation.update(
      { content: new_content },
      {
        where: { id: note_id },
        returning: true,
      }
    );

    console.log(updatedNote);

    res
      .status(200)
      .json({ message: `Note ${note_id} found`, data: updatedNote[1] });
  } catch (error) {
    console.error("Error in noteInformationPut:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationPut;
