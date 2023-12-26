import express, { Router } from "express";
import returnData from "./returnMessages.js";
import registerData from "./registerMessages.js";
import authentication from "./authentication.js";
import protectedForTesting from "./protectedForTesting.js";
import manageProfile from "./profile.js";
const router = Router();

export default (): Router => {
  returnData(router);
  registerData(router);
  authentication(router);
  protectedForTesting(router);
  manageProfile(router);
  return router;
};
