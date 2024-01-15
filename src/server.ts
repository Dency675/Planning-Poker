import express from "express";
import { sequelizeSync } from "./services/sequelize";
import noteInformationAdd from "./controllers/note_information/note_information_post";
import user_stories_router from "./router/user_stories";

const app = express();
const port = 3000 || process.env.port;

sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});

app.get("/customerProfile", (req, res) => {
  noteInformationAdd(req, res);
});

app.use(user_stories_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
