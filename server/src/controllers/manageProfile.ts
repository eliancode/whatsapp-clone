import express, { Request, Response } from "express";

export const manageProfile = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    interface ProfileData {
      name: string;
      //Add some more in progress
    }
    const profileData: ProfileData = {
      name: user.username,
      //Add some more in progree
    };
    return res.status(200).json(profileData);
  } catch (error) {
    console.log("Error while trying to show the protected Route: " + error);
    return res.sendStatus(400).send("Bad Request");
  }
};
