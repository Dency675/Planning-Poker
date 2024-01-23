import { Model } from 'sequelize';

class team_member_information extends Model {
    public id!: number;
    public userId!: number;
    public teamId!: number;
    public roleId!: number;
    public status!: 'active' | 'inactive';
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  export default team_member_information;