import express, { Router } from "express";
import { addToDb } from "../controllers/addToDb.js";

export default (router: Router) => {
  router.post("/messages", addToDb);
};
