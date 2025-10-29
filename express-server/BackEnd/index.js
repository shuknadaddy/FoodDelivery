import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectDB } from "./database/db.js";
import { login, signUp } from "./controller/user.controller.js";
import UserRouter from "./routes/user.router.js";
// import { createUser } from "./controller/user.signup.js";

configDotenv();

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.post("/user", signUp);
app.use("/user", UserRouter);

app.get("/user", signUp);

app.use(bodyParser.json());

app.listen(port, () => {
  connectDB();
  console.log(`server is running ${port}`);
});
