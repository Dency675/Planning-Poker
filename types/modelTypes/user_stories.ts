import { Model } from "sequelize";

class user_stories extends Model {
  public id!: number;
  public story_title!: string;
}

export default user_stories;
