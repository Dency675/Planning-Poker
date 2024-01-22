import { DataTypes } from "sequelize";
import user_story_session_mapping from "../../types/modelTypes/user_story_session_mapping";
import sequelize from "../config/sequelize-config";

user_story_session_mapping.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },

    user_story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    round_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    story_point_result: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "user_story_session_mapping",
    tableName: "user_story_session_mapping",
  }
);

export default user_story_session_mapping;
