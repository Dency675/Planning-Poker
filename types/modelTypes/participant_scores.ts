import { Model } from "sequelize";

class participant_scores extends Model {
  public id!: number;
  public team_member_id!: number;
  public user_story_session_mapping_id!: number;
  public story_point!: string;
}

export default participant_scores;
