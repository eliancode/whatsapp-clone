import express from "express";
import { main } from "./prisma-client";
import { PrismaClient } from "@prisma/client";
const app = express();
const PORT = 3000;
const prisma = new PrismaClient();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  return console.log(`Server is up on http://localhost:${PORT}`);
});

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
