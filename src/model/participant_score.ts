// import { Sequelize,DataTypes } from 'sequelize';
// import sequelize  from "../config/sequelize-config";
// import TeamInformation from './team_information';
// import ParticipantScore from '../../types/modelTypes/participant_score';

// ParticipantScore.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         unique: true,
//       },
//       team_member_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: TeamInformation,
//           key: 'id',
//         },
//       },
//       user_story_session_mapping_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: UserstorySessionMapping,
//           key: 'id',
//         },
//       },
//       story_point: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
// {
//     sequelize,
//     modelName:'participant_score',
//     tableName:'participant_score',
// });

// ParticipantScore.belongsTo(TeamInformation, { foreignKey: 'team_member_id' ,
// targetKey: "id" });
// ParticipantScore.belongsTo(UserstorySessionMapping, { foreignKey: 'user_story_session_mapping_id' ,
// targetKey: "id" });

// export default ParticipantScore;
