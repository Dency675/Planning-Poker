import { Request, Response } from 'express';
import TeamMemberInformation from '../../model/team_member_information';
import Session from '../../model/sessions';
import { Op } from 'sequelize';

const recentActivityUser = async (req: Request, res: Response) => {
    try {
        const { user_id, sortBy, sortOrder, fromDate, toDate, page, pageSize } = req.body;

        if (!user_id) {
            return res.status(400).json({ error: 'user_id is required in the request body' });
        }

        const teamMemberInfo = await TeamMemberInformation.findOne({
            where: { userId: user_id },
        });

        if (!teamMemberInfo) {
            return res.status(404).json({ error: 'User not found' });
        }

        const team_id = teamMemberInfo.teamId;

        const queryOptions: any = {
            attributes: ['session_title', 'create_date_time'],
            where: {
                team_id,
                status: 'completed',
            },
            order: [],
            offset: 0,
            limit: 10, 
        };

        // Sorting
        if (sortBy && sortOrder) {
            queryOptions.order.push([sortBy, sortOrder]);
        } else if(sortBy=='session_title') {
            queryOptions.order.push(['session_title', 'ASC']);
        }
         else if(sortBy=='create_date_time') {
            queryOptions.order.push( ['create_date_time', 'ASC']);
        }
         else if(sortOrder=='DESC'){
            queryOptions.order.push(['session_title', 'DESC'], ['create_date_time', 'DESC']);
        }
         else{
            queryOptions.order.push(['session_title', 'ASC'], ['create_date_time', 'ASC']);
        }

        // Filtering by create_date_time
        if (fromDate && toDate) {
            queryOptions.where.create_date_time = {
                [Op.between]: [fromDate, toDate],
            };
        }

        // Pagination
        if (page && pageSize) {
            queryOptions.offset = (page - 1) * pageSize;
            queryOptions.limit = pageSize;
        }

        const completedSessions = await Session.findAll(queryOptions);

        if (!completedSessions.length) {
            return res.status(204).send('No Content');
        }

        res.json(completedSessions);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default recentActivityUser;
