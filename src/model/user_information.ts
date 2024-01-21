import Sequelize, { DataTypes } from "sequelize";
import TeamInformation from "../../types/modelTypes/team_information";
import sequelize from "../config/sequelize-config";

import user_information from "../../types/modelTypes/user_information";
user_information.init(
    {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          unique: true,
          allowNull: false,
        },
        employee_id: {
          type: DataTypes.INTEGER,
        },
        join_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        last_login_time: {
          type: DataTypes.DATE,
        },
        status: {
          type: DataTypes.ENUM('active', 'inactive', 'pending'),
        },
      },
      {
        sequelize, // pass the Sequelize instance
        modelName: 'user_information', // name of the model
        tableName: 'user_information', // name of the table in the database
    }
);

export default user_information;