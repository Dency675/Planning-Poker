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
      type: DataTypes.ENUM("active", "inactive", "pending"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TeamInformation",
    tableName: "team_information",
    timestamps: true,
  }
);

export default TeamInformation;
