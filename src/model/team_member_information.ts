
import  { DataTypes } from "sequelize";
import sequelize from "../config/sequelize-config";
import team_member_information from "../../types/modelTypes/team_member_information";

import user_information from "./user_information";
import team_information from "./team_information";
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
          model: 'user_information',
          key: 'id',
        },
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'team_information',
          key: 'id',
        },
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id',
        },
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'team_member_information',
      tableName: 'team_member_information',
    }
  );

  // Define associations
  team_member_information.hasMany(user_information, {
    foreignKey: 'userId',
  });
  user_information.belongsTo(team_member_information)

  team_member_information.hasOne(team_information, {
    foreignKey: 'teamId',
  });
  team_information.belongsTo(team_member_information)

  team_member_information.hasMany(roles, {
    foreignKey: 'roleId',
  });
  roles.belongsTo(team_member_information)

  user_information.belongsToMany(team_information, {
    through: 'TeamMemberInformation', // Assuming you have a join table 'TeamMemberInformation'
    foreignKey: 'user_id',
  });
  
  team_information.belongsToMany(user_information, {
    through: 'TeamMemberInformation', // Assuming you have a join table 'TeamMemberInformation'
    foreignKey: 'team_id',
  });

  export default team_member_information;