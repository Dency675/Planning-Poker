import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize-config";
import team_member_information from "../../types/modelTypes/team_member_information";

import team_information from "./team_information";
import user_information from "./user_information";
import roles from "./role_model";

team_member_information.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "user_information",
        key: "id",
      },
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "team_information",
        key: "id",
      },
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "team_member_information",
    tableName: "team_member_information",
  }
);

user_information.hasOne(team_member_information, {
  foreignKey: "userId",
  as: "userTeamMember",
});
team_member_information.belongsTo(user_information);

team_information.hasOne(team_member_information, {
  foreignKey: "teamId",
  as: "teamTeamMember",
});
team_member_information.belongsTo(team_information);

roles.hasMany(team_member_information, {
  foreignKey: "roleId",
});
team_member_information.belongsTo(roles);


export default team_member_information;
