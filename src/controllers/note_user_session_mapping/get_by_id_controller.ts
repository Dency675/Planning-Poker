import express from "express";
import { Request, Response } from "express";
import associations from "../../model/associations";
import note_user_session_mapping from "../../model/note_user_session_mapping_Model";
import SessionParticipants from "../../model/session_participants";
import { Op } from "sequelize";
import NoteInformation from "../../model/note_information";

associations();

export const getByIDNoteUserMapping = async (req: Request, res: Response) => {
  try {
    const sessionParticipantID = req.query.session_participants_id;
    if (!sessionParticipantID) {
      res
        .status(400)
        .send("Missing Required parameter: session_participants_id ");
    } else {
      const note_id = await note_user_session_mapping.findOne({
        attributes: ["noteID"],
        where: { sessionParticipantID: sessionParticipantID },
        raw: true,
      });
      if (!note_id) {
        res
          .status(404)
          .send("No note was found to have been made during that session.");
      } else {
        console.log({ note_id });
        const detailsNote = await NoteInformation.findOne({
          attributes: ["id", "note_title", "content"],
          where: { id: note_id.noteID },
          raw: true,
        });
        if (!detailsNote) {
          res.status(404).send("Error: Unable to retrieve note details.");
        } else {
          console.log({ detailsNote });
          res
            .status(200)
            .send(
              `Details: \n Note ID: ${detailsNote?.id} \n ${detailsNote?.note_title}\n${detailsNote?.content}`
            );
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error!");
  }
};
