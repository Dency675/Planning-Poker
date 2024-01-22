import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/sequelize-config";
import Session from "../../types/modelTypes/sessions";

import TeamInformation from "../../types/modelTypes/team_information";
import User from "../../types/modelTypes/user_information";
import Estimation from "../../types/modelTypes/estimations";
import Calculation from "../../types/modelTypes/calculations";

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
    },
    scrum_master_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    estimation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    calculation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "completed"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Session",
    tableName: "sessions",
    timestamps: true,
  }
);

// Session.belongsTo(TeamInformation, { foreignKey: "team_id", targetKey: "id" });

// Session.associate = function (models: any): void {
//   Session.belongsTo(models.TeamInformation, {
//     foreignKey: "team_id",
//     targetKey: "id",
//   });

//   Session.belongsTo(models.User, {
//     foreignKey: "scrum_master_id",
//     targetKey: "id",
//   });

//   // ... Add other associations here
// };

// TeamInformation.hasMany(Session, { foreignKey: "team_id", sourceKey: "id" });

// Session.belongsTo(User, { foreignKey: "scrum_master_id" });
// User.hasMany(Session, { foreignKey: "scrum_master_id" });

// Session.belongsTo(Estimation, { foreignKey: "estimation_id" });
// Estimation.hasOne(Session, { foreignKey: "estimation_id" });

// Session.belongsTo(Calculation, { foreignKey: "calculation_id" });
// Calculation.hasOne(Session, { foreignKey: "calculation_id" });

export default Session;
