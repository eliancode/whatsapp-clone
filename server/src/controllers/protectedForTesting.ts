import express, { Request, Response } from "express";
export const protectedForTesting = async (req: Request, res: Response) => {
  try {
    const isLoggedIn = req.body.isLoggedIn;
    if (!isLoggedIn) {
      return res.status(401).send("Wrong token!");
    }
    return res.status(200).send("Nice! You have access to this endpoint!");
  } catch (error) {
    console.log("Error while trying to show the protected Route: " + error);
    return res.status(400).send("Bad Request");
  }
};
