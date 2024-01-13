import { Op } from "sequelize";
import { Request, Response } from "express";
import NoteInformation from "../../model/note_information";

const noteInformationAdd = async (
  req: Request,
  res: Response
): Promise<void> => {
  const found = await NoteInformation.create({
    note_title: "string",
    content: "user added",
  });

  console.log(found);
};

export default noteInformationAdd;
