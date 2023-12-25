import express, { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { protectedForTesting } from "../controllers/protectedForTesting.js";

export default (router: Router) => {
  router.get("/profile", verifyToken, protectedForTesting);
};
