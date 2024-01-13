import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/sequelize-config.ts";
import NoteInformation from "../../types/modelTypes/note_information.ts";

NoteInformation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    note_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    modelName: "note_information",
    tableName: "note_information",
  }
);

export default NoteInformation;
