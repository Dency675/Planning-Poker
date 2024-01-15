import express from "express";
import { sequelizeSync } from "./services/sequelize";

import noteInformationRouter from "./router/note"
import calculations from "./model/calculations";
import router from "./router/calculations";
import teamInformationRouter from "../src/router/team_information";
import estimationsRouter from "./router/estimationsRouter";
import user_stories_router from "./router/user_stories";


const app = express();
const port = 3000 || process.env.port;

sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());


app.use("/note", noteInformationRouter);

app.use("/api/teamInformation", teamInformationRouter);

app.use('/estimations',estimationsRouter);

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});


app.use("/api/calculations", router);
app.use(user_stories_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
