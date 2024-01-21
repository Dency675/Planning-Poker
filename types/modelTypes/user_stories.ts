import { Model } from "sequelize";

class user_stories extends Model {
  public id!: number;
  public user_story!: Text;
}

export default user_stories;
