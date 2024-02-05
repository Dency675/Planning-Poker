import express from "express";
import { sequelizeSync } from "./services/sequelize";

import noteInformationRouter from "./router/note";
import sessionRouter from "./router/sessions";
import calculations from "./model/calculations";
import teamInformationRouter from "../src/router/team_information";
import estimationsRouter from "./router/estimationsRouter";
import user_stories_router from "./router/user_stories";
import calculationsrouter from "./router/calculations";
import router from "./router/calculations";
import userinformationRouter from "./router/user_information";
import user_story_mapping_router from "./router/user_story_mapping";
import participant_scores_router from "./router/participant_scores";

import sequelize from "./config/sequelize-config";
import TeamInformation from "./model/team_information";
import Session from "./model/sessions";
import associations from "../src/model/associations.ts";
import role_router from "../src/router/role";
import scalesRouter from "./router/scalesRouter";
import note_user_map_router from "./router/note_user_mapping.ts";
// import participantScoreRouter from "./router/participantScoreRouter";

const app = express();
const port = 3000 || process.env.port;

associations();
sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());

app.use("/note", noteInformationRouter);
app.use("/noteuser", note_user_map_router);

app.use("/sessions", sessionRouter);

app.use("/api/teamInformation", teamInformationRouter);

app.use("/estimations", estimationsRouter);
app.use("/scales", scalesRouter);
// app.use('/participantScore',participantScoreRouter);

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});
//noteUserSessionMappingID int AI PK
// noteID int
// sessionParticipantID

app.use(user_stories_router);
app.use("/api/calculations", calculationsrouter);

app.use("/api/user", userinformationRouter);

app.use(user_story_mapping_router);

app.use(user_story_mapping_router);

app.use(role_router);
app.use(participant_scores_router);

app.use(note_user_map_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
