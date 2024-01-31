// user.controller.ts
import { Request, Response } from 'express';
import { Op } from 'sequelize';
import user_information from '../../model/user_information';

export const searchUser = async (req: Request, res: Response): Promise<void> => {
  try {
    let { offset, search } = req.query;

    if (typeof search === 'string') {
      search = search.trim();
    }

    if (!search) {
      res.status(422).json({error: "Missing Search parameter "});
      return;
    }

    let skip: number = 0;
    if (offset) {
      skip = parseInt(offset as string);
    }

    // Search for users by name
    const userResults = await user_information.findAll({
      where: {
        name: { [Op.like]: `%${search}%` },
      },
      limit: 3,
      offset: skip,
    });

    console.log(userResults);
    res.status(200).json({ userResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
