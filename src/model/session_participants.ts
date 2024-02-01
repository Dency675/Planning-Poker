import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/sequelize-config";
import Session from "./sessions";
import UserInformation from "./user_information";
import SessionParticipants from "../../types/modelTypes/session_participants";

SessionParticipants.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Session,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: UserInformation,
        key: "id",
      },
    },
    userType: {
      type: DataTypes.ENUM("Guest", "Developer", "Scrum Master"),
      allowNull: false,
    },
    isJoined: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: Sequelize.literal("false"),
    },
  },
  {
    sequelize,
    modelName: "SessionParticipants",
    underscored: true,
  }
);

SessionParticipants.belongsTo(Session, {
  foreignKey: "sessionId",
  targetKey: "id",
});
Session.hasMany(SessionParticipants, {
  foreignKey: "sessionId",
  as: "participants",
});

SessionParticipants.belongsTo(UserInformation, {
  foreignKey: "userId",
  targetKey: "id",
  as: "user",
});
UserInformation.hasMany(SessionParticipants, { foreignKey: "userId" });

export default SessionParticipants;
