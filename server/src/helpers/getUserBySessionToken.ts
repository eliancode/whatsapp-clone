import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getUserBySessionToken = async (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY) as string;
    const username = decoded;
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err) {
    return err;
  }
};
