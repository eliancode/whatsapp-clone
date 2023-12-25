import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["WHATSAPPCLONE-AUTH"];
  req.body.token = token;
  if (!token || token === "") {
    return res.redirect(403, "/auth/login");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.body.decoded = decoded;
  } catch (err) {
    return res.redirect(401, "/auth/login");
  }
  return next();
};
