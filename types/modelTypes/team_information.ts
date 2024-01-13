import { Model } from 'sequelize';
 
class TeamInformation extends Model {
    public id!: number;
    public team_name!: string;
    public status!: 'active' | 'inactive' | 'pending';
}

export default TeamInformation;
