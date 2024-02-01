import express from "express";
import { Request, Response, Router } from "express";
import associations from "../../model/associations";

associations();
//const results = await MainModel.findAll({ include: [ JoinedModel ] }) as Array<MainModel & {JoinedModel: JoinedModel}>;
import note_user_session_mapping from "../../model/note_user_session_mapping_Model";
import NoteInformation from "../../model/note_information";
import SessionParticipants from "../../model/session_participants";
import { Op } from "sequelize";

export const getNoteUserMapping = async (req: Request, res: Response) => {
  try {
    const sessionParticipantId = req.query.session_participant_id;

    const value = await note_user_session_mapping.findOne({
      where: [{ session_participant_id: sessionParticipantId }],
      raw: true,
      include: [
        {
          model: SessionParticipants,
          attributes: ["name"],
          required: true,
        },
        {
          model: NoteInformation,
          attributes: ["note_title", "note_description"],
          required: true,
        },
      ],
    });
    if (value) {
      res
        .status(200)
        .send(
          `Details: \n Name:${value.name}\n Title:${value.note_title} \n Description:\n ${value.note_description}`
        );
    } else {
      res.status(404).send("Error!\nNo mapping relations found...");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error!");
  }
};
