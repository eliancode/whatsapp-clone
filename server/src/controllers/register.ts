import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { checkIfExistByUsername } from "../helpers/checkForExistenceByUsername.js";
import { textToHash } from "../helpers/textToHash.js";

const prisma = new PrismaClient();
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const passwordHashed: string = textToHash(password);
    if (!username || !password) {
      return res.status(400).send("Bad Request");
    }
    if (await checkIfExistByUsername(username)) {
      return res.status(400).send("Username already exists");
    }
    const user = await prisma.user.create({
      data: {
        username: username,
        password: passwordHashed,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Bad Request");
  }
};
