import express from "express";
import { Request, Response, Router } from "express";
import note_user_session_mapping from "../../model/note_user_session_mapping_Model";
import SessionParticipants from "../../model/session_participants";
import { Op } from "sequelize";
export const postNoteUserMapping = async (req: Request, res: Response) => {
  try {
    const { notes_id, sessionParticipantID } = req.body;
    // Create sessionParticipant values
    // const duplicate_present_1 = await SessionParticipants.findAll({
    //   where: {
    //     [Op.and]: {
    //       user_id: user_id,
    //       session_id: session_id,
    //     },
    //   },
    // });
    // if (duplicate_present_1) {
    //   res.status(409).send("Entry Already Exists!");
    // } else {
    // const participantCreate = await SessionParticipants.create(
    //   {
    //     session_id: session_id,
    //     user_id: user_id,
    //     user_type: user_type,
    //   },
    //   { raw: true }
    // );
    // if (!participantCreate) {
    //   res.status(400).send("Bad Request");
    // }
    const duplicate_present = await note_user_session_mapping.findAll({
      where: {
        [Op.or]: {
          noteID: notes_id,
          sessionParticipantID: sessionParticipantID,
        },
      },
    });
    if (duplicate_present.length != 0) {
      res.status(409).send("Entry Already Exists!");
    } else {
      const createNotemapping = await note_user_session_mapping.create(
        {
          noteID: notes_id,
          sessionParticipantID: sessionParticipantID,
        },
        { raw: true }
      );
      if (!createNotemapping) {
        res.status(400).send("Bad Request");
      } else {
        console.log(createNotemapping);
        res.status(201).send("Mapping created");
      }
    }
    //  }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error!");
  }
};
