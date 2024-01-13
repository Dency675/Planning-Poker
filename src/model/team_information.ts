import Sequelize, { DataTypes } from "sequelize";
import TeamInformation from "../../types/modelTypes/team_information";
import sequelize from "../config/sequelize-config";
 
TeamInformation.init(
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
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive', 'pending'),
            allowNull: false,
        },
    },
    {
        sequelize, // Assuming you have a Sequelize instance already created and passed as `sequelize`
        modelName: 'TeamInformation', // The name of the model. This should be the same as the class name.
        tableName: 'team_information', // The name of the table in the database.
    }
);

export default TeamInformation;