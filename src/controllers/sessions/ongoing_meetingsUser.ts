import { Request, Response } from 'express';
import TeamMemberInformation from '../../model/team_member_information';
import Session from '../../model/sessions';

const onGoingMeetingsUser = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.body;

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

        const ongoingMeetings = await Session.findAll({
            attributes: ['session_title', 'create_date_time'],
            where: {
                team_id,
                status: 'active',
            },
        });

        if (!ongoingMeetings.length) {
            return res.status(204).send('No Content');
        }

        res.json(ongoingMeetings);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default onGoingMeetingsUser;
