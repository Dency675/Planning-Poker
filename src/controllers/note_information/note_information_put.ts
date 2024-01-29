import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

const noteInformationPut = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { noteId, newContent } = req.body;
    console.log(noteId);

    if (!noteId || !newContent) {
      res.status(422).json({
        error: "note_id or content is missing ",
      });
      return;
    }

    const updatedNote = await NoteInformation.update(
      { content: newContent },
      {
        where: { id: noteId },
        returning: true,
      }
    );

    console.log(updatedNote);

    res
      .status(200)
      .json({ message: `Note ${noteId} found`, data: updatedNote[1] });
  } catch (error) {
    console.error("Error in noteInformationPut:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationPut;
