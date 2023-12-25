import express, { Router } from "express";
import returnData from "./returnMessages.js";
import registerData from "./registerMessages.js";
import authentication from "./authentication.js";
import protectedForTesting from "./protectedForTesting.js";
const router = Router();

export default (): Router => {
  returnData(router);
  registerData(router);
  authentication(router);
  protectedForTesting(router);
  return router;
};
