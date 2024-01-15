import express from "express";
import { sequelizeSync } from "./services/sequelize";
import noteInformationAdd from "./controllers/note_information/note_information_post";
<<<<<<< HEAD
import calculations from "./model/calculations";
import router from "./router/calculations";
import teamInformationRouter from "../src/router/team_information"
=======
>>>>>>> d4d3c4d4fc612a50036e4881bb4264c14dda7a2a
import estimationsRouter from "./router/estimationsRouter";


const app = express();
const port = 3000 || process.env.port;

sequelizeSync();

app.use(express.urlencoded({ extended: true })); //to accept the encoded url

app.use(express.json());

<<<<<<< HEAD
app.use("/api/teamInformation", teamInformationRouter); 

=======
>>>>>>> d4d3c4d4fc612a50036e4881bb4264c14dda7a2a
app.use('/estimations',estimationsRouter);
app.get("/", (req, res) => {
  res.send("Hello, World hi!");
});

app.get("/customerProfile", (req, res) => {
  noteInformationAdd(req, res);
});

app.use("/api/calculations",router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
