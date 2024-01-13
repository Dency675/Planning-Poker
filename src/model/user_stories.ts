import { DataTypes } from "sequelize";
import user_stories from "../../types/modelTypes/user_stories";
import sequelize from "../config/sequelize-config";

user_stories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },

    story_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "poker",
    tableName: "poker",
  }
);

export default user_stories;
