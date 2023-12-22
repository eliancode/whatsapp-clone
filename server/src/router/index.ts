import express, { Router } from "express";
import returnData from "./returnMessages.js";
import registerData from "./registerMessages.js";
import authentication from "./authentication.js";
const router = Router();

export default (): Router => {
  returnData(router);
  registerData(router);
  authentication(router);
  return router;
};
