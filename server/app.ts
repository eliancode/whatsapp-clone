import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
const app = express();
const SERVER_PORT: number = 3055;
import fs from "fs";
import bodyParser from "body-parser";
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
interface Message {
  from: string;
  to: string;
  message: string;
  id: number;
}

let message: Message = {
  to: "Frederik",
  from: "Raphi",
  message: "Hi",
  id: 0,
};
app.get("/", (req: Request, res: Response, next) => {
  try {
    res.send(message);
  } catch (error) {
    console.log(
      "Something went wrong while posting a data to frontend. Error: " + error
    );
  }
});

function callBack() {
  console.log("Saved log in a SuccesLog.txt");
}

app.get("/messages", async (req: Request, res: Response) => {
  //ACHTUNG: WENN JEMAND AUF /messages mit Get-Request zugreift passiert das: app.get('messages')...
  try {
    //console.log(res.render("data", { data: req.body.name }));
    console.log(...req.body);
  } catch (error) {
    console.log(
      "Something went wrong while pulling data from frontend. Error: " + error
    );
  }
});
app.post("/messages", async (req: Request, res: Response, next) => {
  //ACHTUNG: WENN JEMAND AUF /messages mit Post-Request zugreift passiert das: app.post('messages')...
  try {
    let data = req.body;
    console.log(data);
  } catch {
    console.log("Something went wrong");
  }
});
