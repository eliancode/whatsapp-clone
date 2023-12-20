import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const returnMessages = async (req: Request, res: Response) => {
  try {
    const users = await prisma.message.findMany();
    return res.json({
      success: true,
      payload: users,
      message: "Operation Sucessfully",
    });
  } catch (error) {
    console.log(
      "Something went wrong while posting a data to frontend. Error: " + error
    );
    return res.sendStatus(400);
  }
};
