import { Model } from "sequelize";
import TeamInformation from "../../types/modelTypes/team_information";
class Session extends Model {
  [x: string]: any;
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

}

export default Session;
