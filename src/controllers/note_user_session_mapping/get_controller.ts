import express from "express";
import { Request, Response } from "express";
import associations from "../../model/associations";
import note_user_session_mapping from "../../model/note_user_session_mapping_Model";
import SessionParticipants from "../../model/session_participants";
import { Op } from "sequelize";
import NoteInformation from "../../model/note_information";
import user_information from "../../model/user_information";

associations();

export const getNoteUserMapping = async (req: Request, res: Response) => {
  try {
    const users_id = req.query.user_id;

    const userId = await user_information.findAll({
      where: { id: users_id },
    });

    if (userId.length == 0) {
      res.status(404).send("User ID not found"); //Note: Syntax is res.status(<code>).send(<msg>)
    } else {
      const session_user_values = await SessionParticipants.findAll({
        attributes: ["id"],
        where: {
          user_id: users_id,
        },
        raw: true,
      });
      if (session_user_values.length == 0) {
        res.status(404).send("This user hasn't joined any sessions yet!");
      } else {
        console.log(session_user_values);

        const sessionParticipantIDs = session_user_values.map(
          (user) => user.id
        );

        console.log(sessionParticipantIDs);

        const note_user_session_mappings =
          await note_user_session_mapping.findAll({
            attributes: ["noteID"],
            where: { sessionParticipantID: { [Op.in]: sessionParticipantIDs } },
            raw: true,
          });
        if (note_user_session_mappings.length == 0) {
          res.status(204).send("No notes have been created yet!");
        } else {
          const noteIDs = note_user_session_mappings.map(
            (mapping) => mapping.noteID
          );

          const noteDetails = await NoteInformation.findAll({
            attributes: ["id", "note_title", "content"],
            where: { id: { [Op.in]: noteIDs } },
            raw: true,
          });

          res.status(200).send(JSON.stringify(noteDetails));
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error!");
  }
};
