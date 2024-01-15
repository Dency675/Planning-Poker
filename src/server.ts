import express from "express";
import { sequelizeSync } from "./services/sequelize";
import noteInformationAdd from "./controllers/note_information/note_information_post";
<<<<<<< HEAD
import calculations from "./model/calculations";
import router from "./router/calculations";
import teamInformationRouter from "../src/router/team_information";
=======
>>>>>>> bcdc29f3ab611367cd85ecd079b2a0450b4ccb59
import user_stories_router from "./router/user_stories";

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

<<<<<<< HEAD
app.use("/api/calculations", router);
=======
>>>>>>> bcdc29f3ab611367cd85ecd079b2a0450b4ccb59
app.use(user_stories_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
