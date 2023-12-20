import express, { Router } from "express";
import returnData from "./returnData.js";
import registerData from "./registerData.js";
const router = Router();

export default (): Router => {
  returnData(router);
  registerData(router);
  return router;
};
