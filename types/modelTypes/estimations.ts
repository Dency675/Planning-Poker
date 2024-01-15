import { Model } from 'sequelize';

class Estimations extends Model{
    public id?: number;
    public estimation_name!: string;
}

export default Estimations;