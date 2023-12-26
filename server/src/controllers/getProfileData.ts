import express, { Request, Response } from "express";

export const getProfileData = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    if (!user) {
      console.log("User is not defined");
      return res.status(400).send("Bad Request");
    }
    interface ProfileData {
      name: string;
      //Add some more in progress
    }
    const profileData: ProfileData = {
      name: user.username,
      //Add some more in progress
    };
    return res.status(200).json(profileData);
  } catch (error) {
    console.log("Error while trying to show the /profile Route: " + error);
    return res.status(400).send("Bad Request");
  }
};
