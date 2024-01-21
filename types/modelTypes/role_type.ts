import { Model } from 'sequelize';

export class roles extends Model{
    public id!: number;
    public role_name!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}