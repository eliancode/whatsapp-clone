import express, { Request, Response } from "express";
import cors from "cors";

import bodyParser from "body-parser";
import router from "./router/index.js";

const app = express();
const SERVER_PORT: number = 3055;

app.use(cors({ credentials: true }));

app.use(bodyParser.json());

app.listen(SERVER_PORT, () => {
  try {
    console.log("Server is up on Port: " + SERVER_PORT);
  } catch (error) {
    console.log(
      "Something went wrong while listen to port " +
        SERVER_PORT +
        ". Erorr: " +
        error
    );
  }
});

app.use("/", router());
