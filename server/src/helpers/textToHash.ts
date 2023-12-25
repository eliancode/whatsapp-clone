import sha256 from "crypto-js/sha256.js";

export const textToHash = (text: string): string => {
  const hash = sha256(text);
  const result: string = hash.toString();
  return result;
};
