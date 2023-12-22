import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const login = async (req: Request, res: Response) => {
  try {
    //TODO
    return res.sendStatus(200).send("OK");
  } catch (error) {
    console.log("Something went wrong while creating a user. Error: " + error);
    return res.sendStatus(400).send("Bad Request");
  }
};
