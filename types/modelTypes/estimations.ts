import { Model } from 'sequelize';

class Estimations extends Model{
    public id?: number;
    public estimation_name!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

export default Estimations;