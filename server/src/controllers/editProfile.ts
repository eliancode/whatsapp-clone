import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getUserByUsername } from "../helpers/getUserByUsername.js";
import { checkIfExistByUsername } from "../helpers/checkForExistenceByUsername.js";

const prisma = new PrismaClient();
interface ReqBody {
  newUsername: string;
}
export const editProfile = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const isLoggedIn = req.body.isLoggedIn;
    if (!isLoggedIn) {
      return res.status(401).end();
    }
    const { newUsername }: ReqBody = req.body;
    const existingUser = await checkIfExistByUsername(newUsername);
    if (existingUser) {
      return res.status(400).send("New username is already used");
    } else {
      const updatedUsername = await prisma.user.update({
        where: {
          username: user.username,
        },
        data: {
          username: newUsername,
        },
      });
      res.clearCookie("WHATSAPPCLONE-AUTH", { path: "/" });
      return res
        .status(200)
        .json({
          sucess: true,
          payload: updatedUsername,
          message: "Operation Sucessfully",
        })
        .end();
    }
  } catch (error) {
    console.log("Error while trying to edit the profile data: " + error);
    return res.status(400).send("Bad Request");
  }
};
