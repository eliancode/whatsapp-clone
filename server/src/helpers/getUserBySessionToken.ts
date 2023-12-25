import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getUserBySessionToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const username = decoded + "";
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    return username;
  } catch (err) {
    return err;
  }
};
