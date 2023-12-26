import express, { Request, Response } from "express";
import { getUserByUsername } from "../helpers/getUserByUsername.js";
import { textToHash } from "../helpers/textToHash.js";
import { generateToken } from "../helpers/generateToken.js";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
interface ReqBody {
  username: string;
  password: string;
}
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password }: ReqBody = req.body;
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(403).send("Forbidden");
    }
    const expectedHash = textToHash(password);
    if (expectedHash !== user.password) {
      return res.status(403).send("Forbidden");
    }
    const token = generateToken(username, process.env.SECRET_KEY);
    const updatetedUser = await prisma.user.update({
      where: {
        username: username,
      },
      data: {
        token: token,
      },
    });
    return res
      .cookie("WHATSAPPCLONE-AUTH", token, { maxAge: 604800000, path: "/" })
      .status(200)
      .json({
        success: true,
        acces_token: token,
        message: "Operation Sucessfully",
      });
  } catch (error) {
    console.log("Something went wrong while logging in. Error: " + error);
    return res.status(500).send("Internal Server Error");
  }
};
