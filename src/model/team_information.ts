import Sequelize, { DataTypes } from "sequelize";
import team_information from "../../types/modelTypes/team_information";
import sequelize from "../config/sequelize-config";
 
team_information.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        team_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique:true,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            allowNull: false,
        },
    },
    {
        sequelize, // Assuming you have a Sequelize instance already created and passed as `sequelize`
        modelName: 'team_information', // The name of the model. This should be the same as the class name.
        tableName: 'team_information', // The name of the table in the database.
        timestamps: true, // Adds createdAt and updatedAt timestamps to the model.
    }
);

export default team_information;
