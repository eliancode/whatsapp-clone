import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTokenByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  const token = user.token;
  return token;
};
