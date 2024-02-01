import { Model } from "sequelize";
import TeamInformation from "../../types/modelTypes/team_information";
class Session extends Model {
  [x: string]: any;
  public id!: number;
  public sessionTitle!: string;
  public createDateTime!: Date;
  public timer!: string | null;
  public excelLink!: string;
  public team_id!: number;
  public scrum_master_id!: string;
  public estimation_id!: number;
  public calculation_id!: number;
  public status!: "active" | "completed";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default Session;
