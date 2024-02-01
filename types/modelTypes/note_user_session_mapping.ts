import { Model } from "sequelize";

export class note_user_session_mapping extends Model {
  public id!: number;
  public note_id!: number;
  public session_participant_id!: number;
  note_description: any;
  note_title: any;
  name: any;
}
