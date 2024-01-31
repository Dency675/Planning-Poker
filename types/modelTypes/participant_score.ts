import { Model } from 'sequelize';

class ParticipantScore extends Model{
    public id?: number;
    public team_member!: number;
    public user_story_session_mapping_id!: number;
    public story_point!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default ParticipantScore;