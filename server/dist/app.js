import express from "express";
//import { main } from "./prisma-client";
//import { PrismaClient } from "@prisma/client";
import { createServer } from "node:http";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);
const io = new Server(server);
//const prisma = new PrismaClient();
const PORT = 3000;
app.get("/", (req, res) => {
    //res.send("<h1>Hello world</h1>");
    res.sendFile(new URL("./index.html", import.meta.url).pathname);
});
io.on("connection", (socket) => {
    console.log("a user connected");
});
app.listen(PORT, () => {
    return console.log(`Server is up on http://localhost:${PORT}`);
});
//main()
//  .then(async () => {
//    await prisma.$disconnect();
//  })
//  .catch(async (e) => {
//    console.error(e);
//   await prisma.$disconnect();
//    process.exit(1);
//  });
//# sourceMappingURL=app.js.map