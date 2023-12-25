import express, { Request, Response } from "express";
import { getUserByEmail } from "../helpers/getUserByEmail.js";
import { textToHash } from "../helpers/textToHash.js";
import { generateToken } from "../helpers/generateToken.js";
import cookieParser from "cookie-parser";
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByEmail(username);
    if (!user) {
      return res.sendStatus(403).send("Forbidden");
    }
    const expectedHash = textToHash(password);
    if (expectedHash !== user.password) {
      return res.status(403).send("Forbidden");
    }
    const token = generateToken(username, process.env.SECRET_KEY);
    return (
      res
        //maxAge: 604800000 means 7d (the same time as the token expires)
        .cookie("WHATSAPPCLONE-AUTH", token, { maxAge: 604800000 })
        .status(200)
        .json({
          success: true,
          acces_token: token,
          message: "Operation Sucessfully",
        })
    );
  } catch (error) {
    console.log("Something went wrong while logging in. Error: " + error);
    return res.sendStatus(400).send("Bad Request");
  }
};
