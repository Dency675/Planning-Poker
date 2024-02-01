const note_associations = () => {
  const session_participants = require("../../model/session_participants");
  const NoteInformation = require("../../model/note_information");
  const note_user_session_mapping = require("../../model/note_user_session_mapping_Model");

  session_participants.hasMany(note_user_session_mapping, {
    foreignKey: "session_participants_id",
  });
  note_user_session_mapping.belongsTo(session_participants, {
    foreignKey: "session_participants_id",
  });

  NoteInformation.hasMany(note_user_session_mapping, { foreignKey: "note_id" });
  note_user_session_mapping.belongsTo(NoteInformation, {
    foreignKey: "note_id",
  });
};
