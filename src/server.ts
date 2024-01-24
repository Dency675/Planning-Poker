import express from "express";
import { sequelizeSync } from "./services/sequelize";

import noteInformationRouter from "./router/note"
import calculations from "./model/calculations";
import teamInformationRouter from "../src/router/team_information";
import estimationsRouter from "./router/estimationsRouter";
import user_stories_router from "./router/user_stories";
import router from "./router/calculations";
import calculationsrouter from "./router/calculations";
import userinformationRouter from "./router/user_information";
import scalesRouter from "./router/scalesRouter";
// import participantScoreRouter from "./router/participantScoreRouter";

const app = express();
const port = 3000 || process.env.port;

sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());


app.use("/note", noteInformationRouter);

app.use("/api/teamInformation", teamInformationRouter);

app.use('/estimations',estimationsRouter);
app.use('/scales',scalesRouter);
// app.use('/participantScore',participantScoreRouter);

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});


app.use(user_stories_router);
app.use("/api/calculations",calculationsrouter)

app.use("/api/user",userinformationRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
