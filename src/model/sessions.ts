import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/sequelize-config";
import Session from "../../types/modelTypes/sessions";

import TeamInformation from "./team_information";
import UserInformation from "./user_information";
import Estimations from "./estimations";
import calculations from "./calculations";

Session.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    session_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    create_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timer: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    excel_link: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "team_information",
        key: "id",
      },
    },
    scrum_master_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "user_information",
        key: "id",
      },
    },
    estimation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "estimations",
        key: "id",
      },
    },
    calculation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "calculations",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("active", "completed"),
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
  },
  {
    sequelize,
    modelName: "Session",
    tableName: "sessions",
    timestamps: true,
  }
);

TeamInformation.hasMany(Session, { foreignKey: "team_id" });
Session.belongsTo(TeamInformation, {
  foreignKey: "team_id",
  targetKey: "id",
});

UserInformation.hasMany(Session, { foreignKey: "scrum_master_id" });
Session.belongsTo(UserInformation, {
  foreignKey: "scrum_master_id",
  targetKey: "id",
});

Estimations.hasMany(Session, { foreignKey: "estimation_id" });
Session.belongsTo(Estimations, {
  foreignKey: "estimation_id",
  targetKey: "id",
});

calculations.hasMany(Session, { foreignKey: "calculation_id" });
Session.belongsTo(calculations, {
  foreignKey: "calculation_id",
  targetKey: "id",
});

export default Session;
