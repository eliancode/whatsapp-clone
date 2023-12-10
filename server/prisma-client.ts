import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addToDB(from, to, message) {
  const user = await prisma.message.create({
    data: {
      from: from,
      to: to,
      message: message,
    },
  });
  console.log(user);
  const messages = await prisma.message.findMany();
  console.log(messages);
}
export function runAddToBD(from, to, message) {
  addToDB(from, to, message)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
async function returnMessages() {
  const users = await prisma.message.findMany();
  return users;
}
export async function runReturnMessages() {
  const users = await prisma.message
    .findMany()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  return users;
}
