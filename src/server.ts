import express from "express";
import { sequelizeSync } from "./services/sequelize";
import noteInformationAdd from "./controllers/note_information/note_information_post";
import role_router from "../src/router/role"

const app = express();
const port = 3000 || process.env.port;

sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});

app.use(role_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
