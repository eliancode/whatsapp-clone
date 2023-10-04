import express from "express";
const app = express();
const SERVER_PORT = 3055;
app.get("/", (req, res) => {
    res.send("LETS GOOOOOOOOO!!!!!!!!!!!!!!!!");
    console.log("Suceces sending data");
});
app.get("/", (req, res) => {
    let data = res.get("/");
    console.log(data);
});
app.listen(SERVER_PORT, () => {
    console.log("Server up on Port: " + SERVER_PORT);
});
//# sourceMappingURL=app.js.map