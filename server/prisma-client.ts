import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  const user = await prisma.user.create({
    data: {
      email: "eliancode@gmail.com",
      name: "eliancode",
    },
  });
  console.log(user);
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}
