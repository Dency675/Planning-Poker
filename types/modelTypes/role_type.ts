import { Model } from 'sequelize';

export class roles extends Model{
    role_id!: number;
    role_name!: string;
}