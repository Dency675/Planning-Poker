import { Model } from "sequelize";

class SessionParticipants extends Model {
  [x: string]: any;

  public id!: number;
  public session_id!: number;
  public user_id!: string;
  public userType!: "Guest" | "Developer" | "Scrum Master";
  public isJoined!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default SessionParticipants;
