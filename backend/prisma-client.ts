import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  const user = await prisma.user.create({
    data: {
      name: "eliancode",
      email: "eliancode@gmail.com",
    },
  });
  console.log(user);
}
