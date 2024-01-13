import { DataTypes, Sequelize } from "sequelize";
import { roles } from "../../types/modelTypes/role_type";
import sequelize from "../config/sequelize-config";


roles.init({
    role_id :{
        type: DataTypes.INTEGER,
        primaryKey : true,
        allowNull: false,
    },
    role_name :{
        type: DataTypes.STRING,
        allowNull: false,
    } 
},{
    sequelize,
    modelName: 'roles',
    tableName: 'roles'
});

export default roles;