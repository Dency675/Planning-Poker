import { DataTypes, Sequelize } from "sequelize";
import { roles } from "../../types/modelTypes/role_type";
import sequelize from "../config/sequelize-config";


roles.init({
    id :{
        type: DataTypes.INTEGER,
        primaryKey : true,
        allowNull: false,
    },
    role_name :{
        type: DataTypes.STRING,
        allowNull: false,
    },    
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
     
},{
    sequelize,
    modelName: 'roles',
    tableName: 'roles',
    timestamps:true,
});

export default roles;