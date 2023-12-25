import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["WHATSAPPCLONE-AUTH"];
  if (!token) {
    return res.redirect(403, "/auth/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return res.redirect(401, "/auth/login");
  }

  return next();
};
