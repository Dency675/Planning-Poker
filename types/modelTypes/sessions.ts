import { Model } from "sequelize";
import TeamInformation from "../../types/modelTypes/team_information";
class Session extends Model {
  public id!: number;
  public session_title!: string;
  public create_date_time!: Date;
  public timer!: string | null;
  public excel_link!: string;
  public team_id!: number;
  public scrum_master_id!: string;
  public estimation_id!: number;
  public calculation_id!: number;
  public status!: "active" | "completed";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Session.associate = async (models)=> {
  //   Session.belongsTo(models.TeamInformation, {
  //     foreignKey: "team_id",
  //     targetKey: "id",
  //   });

  //   Session.belongsTo(models.User, {
  //     foreignKey: "scrum_master_id",
  //     targetKey: "id",
  //   });

  //   // ... Add other associations here
  // };

  // static associate = async (models: Record<string, typeof Model>) => {
  //   const {
  //     TeamInformation,
  //     UserStoryMapping,
  //     UserStory,
  //     User,
  //     Calculation,
  //     Estimation,
  //   } = models;

  //   this.belongsTo(TeamInformation, {
  //     foreignKey: "team_id",
  //     targetKey: "id",
  //   });

  //   TeamInformation.hasMany(this, { foreignKey: "team_id", sourceKey: "id" });
  // };
}

export default Session;
