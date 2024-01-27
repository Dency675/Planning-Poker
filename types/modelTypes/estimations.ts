import { Model } from 'sequelize';

class Estimations extends Model{
    public id?: number;
    public estimation_name!: string;
    public created_at?: Date;
    public updated_at?: Date;
}

export default Estimations;