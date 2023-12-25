import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const addToDb = async (req: Request, res: Response) => {
  try {
    const { from, to, message } = req.body;
    const createdUser = await prisma.message.create({
      data: {
        from: from,
        to: to,
        message: message,
      },
    });
    if (!from || !to || !message) {
      return res.status(400).send("Bad Request");
    }
    console.log(createdUser);
    res.status(200).send("OK");
  } catch (error) {
    console.log("Error while adding data to the database: " + error);
    return res.status(400).send("Bad Request");
  }
};
