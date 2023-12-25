import express, { Request, Response } from "express";
import { getUserByUsername } from "../helpers/getUserByUsername.js";
export const protectedForTesting = async (req: Request, res: Response) => {
  try {
    const token = req.body.token;
    const decoded = req.body.decoded;
    const user = await getUserByUsername(decoded.username);
    const correctToken = user.token;
    if (token !== correctToken) {
      return res.status(401).send("Wrong token!");
    }
    return res.status(200).send("Nice! You have access to this endpoint!");
  } catch (error) {
    console.log("Error while trying to show the protected Route: " + error);
    return res.status(400).send("Bad Request");
  }
};
