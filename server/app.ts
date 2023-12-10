import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const SERVER_PORT: number = 3055;
import bodyParser from "body-parser";
import { runAddToBD, runReturnMessages } from "./prisma-client.js";
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    limit: "1mb",
    extended: true,
    parameterLimit: 200,
  })
);
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
// interface Message {
//   from: string;
//   to: string;
//   message: string;
//   id: number;
// }
app.get("/", (req: Request, res: Response, next) => {
  try {
    console.log("Frontend asked for messages from backend.");
    res.send(runReturnMessages());
  } catch (error) {
    console.log(
      "Something went wrong while posting a data to frontend. Error: " + error
    );
  }
});

// function callBack() {
//   console.log("Saved log in a SuccesLog.txt");
// }
app.post("/messages", async (req: Request, res: Response, next) => {
  try {
    let data = req.body;
    runAddToBD(data.from, data.to, data.message);
  } catch {
    console.log("Something went wrong");
  }
});
