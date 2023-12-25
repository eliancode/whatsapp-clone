import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserBySessionToken } from "../helpers/getUserBySessionToken";

export const manageProfile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["WHATSAPPCLONE-AUTH"];

  if (!token || token === "") {
    return res.redirect(403, "/auth/login");
  }
  req.body.user = getUserBySessionToken(token);
  try {
    const decoded = jwt.decode(token);
  } catch (err) {
    return res.status(500).json({ error: "Failed to authenticate token" });
  }
  return next();
};
