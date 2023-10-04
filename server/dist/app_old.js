var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { main } from "./prisma-client";
import { PrismaClient } from "@prisma/client";
import { createServer } from "node:http";
import { Server } from "socket.io";
const app = express();
const server = createServer(app);
const io = new Server(server);
const prisma = new PrismaClient();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});
io.on("connection", (socket) => {
    console.log("a user connected");
});
app.listen(PORT, () => {
    return console.log(`Server is up on http://localhost:${PORT}`);
});
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=app_old.js.map