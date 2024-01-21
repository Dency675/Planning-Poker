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

    user_story: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user_stories",
    tableName: "user_stories",
  }
);

export default user_stories;
