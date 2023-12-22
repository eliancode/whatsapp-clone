import express, { Router } from "express";
import { addToDb } from "../controllers/registerMessage.js";

export default (router: Router) => {
  router.post("/messages", addToDb);
};
