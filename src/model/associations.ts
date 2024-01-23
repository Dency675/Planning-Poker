import TeamInformation from "./team_information";
import UserInformation from "./user_information";
import Session from "./sessions";
import Estimations from "./estimations";
import calculations from "./calculations";


const associations = async () => {
  TeamInformation.hasMany(Session, { foreignKey: "team_id" });
  Session.belongsTo(TeamInformation, {
    foreignKey: "team_id",
    targetKey: "id",
  });

  UserInformation.hasMany(Session, { foreignKey: "scrum_master_id" });
  Session.belongsTo(UserInformation, {
    foreignKey: "scrum_master_id",
    targetKey: "id",
  });

  Estimations.hasMany(Session, { foreignKey: "estimation_id" });
  Session.belongsTo(Estimations, {
    foreignKey: "estimation_id",
    targetKey: "id",
  });

  calculations.hasMany(Session, { foreignKey: "calculation_id" });
  Session.belongsTo(calculations, {
    foreignKey: "calculation_id",
    targetKey: "id",
  });


};

export default associations;
