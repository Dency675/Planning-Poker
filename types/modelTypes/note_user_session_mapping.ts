import { Model } from "sequelize";

export class note_user_session_mapping extends Model {
  public noteUserSessionMappingID!: number;
  public noteID!: number;
  public sessionParticipantID!: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  note_description: any;
  note_title: any;
  name: any;
}
