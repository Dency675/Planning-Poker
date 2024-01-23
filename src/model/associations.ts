import TeamInformation from "./team_information";
import UserInformation from "./user_information";
import Session from "./sessions";
import Estimations from "./estimations";
import calculations from "./calculations";
import user_story_session_mapping from "./user_story_session_mapping";
import user_stories from "./user_stories";
import participant_scores from "./participant_scores";



const associations = async () => {

  user_stories.hasMany(user_story_session_mapping, {
    foreignKey: "user_story_id",
  });
  user_story_session_mapping.belongsTo(user_stories, {
    foreignKey: "user_story_id",
    targetKey: "id",
  });

  Session.hasMany(user_story_session_mapping, {
    foreignKey: "session_id",
  });
  user_story_session_mapping.belongsTo(Session, {
    foreignKey: "session_id",
    targetKey: "id",
  });

  TeamInformation.hasMany(participant_scores, {
    foreignKey: "team_member_id",
  });
  participant_scores.belongsTo(TeamInformation, {
    foreignKey: "team_member_id",
    targetKey: "id",
  });

  user_story_session_mapping.hasMany(participant_scores, {
    foreignKey: "user_story_session_mapping_id",
  });
  participant_scores.belongsTo(user_story_session_mapping, {
    foreignKey: "user_story_session_mapping_id",
    targetKey: "id",
  });


};

export default associations;
