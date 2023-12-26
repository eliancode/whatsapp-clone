import express, { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { getProfileData } from "../controllers/getProfileData.js";
import { editProfile } from "../controllers/editProfile.js";

export default (router: Router) => {
  router.get("/profile", verifyToken, getProfileData);
  router.put("/profile", verifyToken, editProfile);
};
