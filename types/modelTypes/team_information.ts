import { Model } from 'sequelize';
 
class team_information extends Model {
    public id!: number;
    public team_name!: string;
    public status!: 'active' | 'inactive';
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  static team_name: any;
  static status: any;
  static id: any;
}

export default team_information;
