import { Model, DataTypes } from 'sequelize';
import { Sequelize } from 'sequelize/types';

class UserInformation extends Model {
    public id!: string;
    public name!: string;
    public email!: string;
    public employee_id!: number | null;
    public join_date!: Date;
    public last_login_time!: Date | null;
    public status!: 'active' | 'inactive' | 'pending';
}
export default UserInformation;