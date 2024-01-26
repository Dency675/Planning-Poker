import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize-config";
import Session from "./sessions";
import UserInformation from "./user_information";

class SessionParticipants extends Model {}

SessionParticipants.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    session_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Session,
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: UserInformation,
        key: "id",
      },
    },
    user_type: {
      type: DataTypes.ENUM("Guest", "Developer", "Scrum Master"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SessionParticipants",
    tableName: "session_participants",
  }
);

SessionParticipants.belongsTo(Session, { foreignKey: "session_id",targetKey: "id" });
Session.hasMany(SessionParticipants, { foreignKey: "session_id" });

SessionParticipants.belongsTo(UserInformation, { foreignKey: "user_id" ,targetKey: "id"});
UserInformation.hasMany(SessionParticipants, { foreignKey: "user_id" });

export default SessionParticipants;
