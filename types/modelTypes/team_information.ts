import { Model } from 'sequelize';
 
class TeamInformation extends Model {
    public id!: number;
    public team_name!: string;
    public status!: 'active' | 'inactive' | 'pending';
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default TeamInformation;
