import express, { Request, Response } from "express";

export const protectedForTesting = async (req: Request, res: Response) => {
  try {
    return res.status(200).send("Nice! You have acces to this endpoint!");
  } catch (error) {
    console.log("Error while trying to show the protected Route: " + error);
    return res.sendStatus(400).send("Bad Request");
  }
};
