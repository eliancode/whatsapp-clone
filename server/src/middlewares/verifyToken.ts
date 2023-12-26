import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserByUsername } from "../helpers/getUserByUsername.js";
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cookieToken = req.cookies["WHATSAPPCLONE-AUTH"];
  if (!cookieToken || cookieToken === "") {
    return res.redirect(401, "/auth/login");
  }
  try {
    const decoded = jwt.decode(cookieToken) as any;
    if (
      !decoded ||
      decoded === "" ||
      !decoded.username ||
      decoded.username === ""
    ) {
      return res.redirect(401, "auth/login");
    }
    const user = await getUserByUsername(decoded.username);
    req.body.user = user;
    if (!user || !user.token) {
      return res.redirect(401, "/auth/login");
    }
    const correctToken = user.token;
    req.body.isLoggedIn = correctToken === cookieToken;
  } catch (err) {
    console.error("Error verifying token:", err);
    return res.redirect(401, "/auth/login");
  }
  return next();
};
