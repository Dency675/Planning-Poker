import { Request, Response } from "express";
import { Op, OrderItem } from "sequelize";
import NoteInformation from "../../model/note_information";

const noteInformationSort = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sortBy, sortOrder } = req.query as {
      sortBy: string;
      sortOrder: string;
    };

    if (!sortBy || (sortBy !== "noteTitle" && sortBy !== "createdAt")) {
      return res.status(400).json({ message: "Invalid sortBy parameter" });
    }

    const validSortOrders = ["asc", "desc"];
    if (!sortOrder || !validSortOrders.includes(sortOrder)) {
      return res.status(400).json({ message: "Invalid sortOrder parameter" });
    }

    const order: OrderItem[] = [[sortBy, sortOrder]];

    const results = await NoteInformation.findAll({
      order: order,
    });

    console.log(results);
    return res.status(200).json({ message: results });
  } catch (error) {
    console.error("Error in noteInformationSort:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default noteInformationSort;
