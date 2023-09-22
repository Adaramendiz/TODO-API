import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import userRoute from "./components/users/users.routers.js";
import categorieRoute from "./components/categories/categories.routers.js";
import taskRoute from "./components/tasks/tasks.routers.js";

initModels();

db.authenticate()
  .then(() => console.log("connected database"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("synchronized database"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(cors());
app.use(userRoute);
app.use(categorieRoute);
app.use(taskRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
