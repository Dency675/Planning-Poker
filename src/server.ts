import express from "express";
import { sequelizeSync } from "./services/sequelize";
import noteInformationRouter from "./router/note"
import calculations from "./model/calculations";

const app = express();
const port = 3000 || process.env.port;

sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());

app.use("/note", noteInformationRouter);

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
