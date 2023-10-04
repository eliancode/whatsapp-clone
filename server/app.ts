import express, { Request, Response } from "express";
const app = express();
const SERVER_PORT = 3055;
app.get("/", (req: Request, res: Response) => {
  res.send("LETS GOOOOOOOOO!!!!!!!!!!!!!!!!");
});
app.get("/", (req: Request, res: Response) => {
  let data = res.get("/");
  console.log(data);
});
app.listen(SERVER_PORT, () => {
  console.log("Server up on Port: " + SERVER_PORT);
});
