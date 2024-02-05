import { DataTypes, Sequelize } from "sequelize";
import { note_user_session_mapping } from "../../types/modelTypes/note_user_session_mapping";
import sequelize from "../config/sequelize-config";
import user_information from "./user_information";
import NoteInformation from "./note_information";

note_user_session_mapping.init(
  {
    noteUserSessionMappingID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true,
    },
    noteID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sessionParticipantID: {
      type: DataTypes.INTEGER,
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
    modelName: "note_user_session_mapping",
    tableName: "note_user_session_mapping",
    timestamps: true,
  }
);

export default note_user_session_mapping;
