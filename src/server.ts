import express from "express";
import { sequelizeSync } from "./services/sequelize";
import noteInformationRouter from '../src/router/note'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});

app.use("/note", noteInformationRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
