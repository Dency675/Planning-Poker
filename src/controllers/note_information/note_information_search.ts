import { Request, Response } from "express";
import { Op } from "sequelize";
import NoteInformation from "../../model/note_information";
const noteInformationSearch = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { note_title } = req.query;

    if (!note_title) {
      res.status(422).json({
        error: "note_title is missing ",
      });
      return;
    }

    const results = await NoteInformation.findAll({
      where: {
        note_title: {
          [Op.like]: `%${note_title}%`,
        },
      },
    });

    console.log(results);
    res.status(200).json({ message: results });
  } catch (error) {
    console.error("Error in noteInformationGet:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationSearch;
