import express from "express";
import { sequelizeSync } from "./services/sequelize";
import noteInformationAdd from "./controllers/note_information/note_information_post";
import calculations from "./model/calculations";
import router from "./router/calculations";
import teamInformationRouter from "../src/router/team_information";
import user_stories_router from "./router/user_stories";
import user_story_mapping_router from "./router/user_story_mapping";

const app = express();
const port = 3000 || process.env.port;

sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());

app.use("/api/teamInformation", teamInformationRouter);

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});

app.get("/customerProfile", (req, res) => {
  noteInformationAdd(req, res);
});

app.use("/api/calculations", router);
app.use(user_stories_router);

app.use(user_story_mapping_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
