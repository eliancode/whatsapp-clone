import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checkIfExistByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (user !== null) {
    return true;
  } else {
    return false;
  }
};
