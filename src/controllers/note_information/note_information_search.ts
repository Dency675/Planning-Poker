import { Request, Response } from "express";
import { Op } from "sequelize"; // Import Op from Sequelize
import NoteInformation from "../../model/note_information"; // Adjust the path accordingly

const noteInformationSearch = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { note_title } = req.query;
    const results = await NoteInformation.findAll({
      where: {
        note_title: {
          [Op.like]: `%${note_title}%`, // Use Op.like instead of Sequelize.Op.like
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
