import { Model } from "sequelize";

class user_story_session_mapping extends Model {
  public id!: number;
  public user_story_id!: number;
  public session_id!: number;
  public round_number!: number;
  public comment?: Text;
  public story_point_result!: number;
}

export default user_story_session_mapping;
