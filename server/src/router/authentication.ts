import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { register } from "../controllers/register.js";
import { login } from "../controllers/login.js";

export default (router: Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
};
