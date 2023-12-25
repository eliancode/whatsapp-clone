import jwt from "jsonwebtoken";
export const generateToken = (username: string, secretKey: string): string => {
  const token = jwt.sign({ username }, secretKey, { expiresIn: "7d" });
  return token;
};
