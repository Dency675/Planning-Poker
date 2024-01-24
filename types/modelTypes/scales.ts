import { Model } from 'sequelize';

class Scales extends Model{
    public id?: number;
    public estimation_id!: number;
    public scale_name!: string;
    public scale_value!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default Scales;