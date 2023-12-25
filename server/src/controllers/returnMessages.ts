import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const returnMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.message.findMany();
    return res.status(200).json({
      success: true,
      payload: messages,
      message: "Operation Sucessfully",
    });
  } catch (error) {
    console.log(
      "Something went wrong while posting a data to frontend. Error: " + error
    );
    return res.status(400).send("Bad Request");
  }
};
