import express, { Router } from "express";
import { returnMessages } from "../controllers/returnMessages.js";

export default (router: Router) => {
  router.get("/messages", returnMessages);
};
