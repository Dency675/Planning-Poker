import { DataTypes } from "sequelize";
import participant_scores from "../../types/modelTypes/participant_scores";
import sequelize from "../config/sequelize-config";

participant_scores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },

    team_member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_story_session_mapping_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    story_point: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "participant_scores",
    tableName: "participant_scores",
  }
);

export default participant_scores;
