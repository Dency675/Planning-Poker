import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

/**
 * Handles the creation of a new note in the NoteInformation model.
 *
 * @param {Request} req - Express Request object containing client data.
 * @param {Response} res - Express Response object for sending the server's response.
 * @returns {Promise<void>} A JSON response indicating the success or failure of the operation.
 */

const noteInformationPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { note_title, content } = req.body;

    if (!note_title || !content) {
      res.status(422).json({
        error: "note_title or content is missing ",
      });
      return;
    }

    const createdNote = await NoteInformation.create({
      note_title: note_title,
      content: content,
    });

    console.log(createdNote);

    res.status(201).json({ message: "Note created", data: createdNote });
  } catch (error) {
    console.error("Error in noteInformationPost:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationPost;
