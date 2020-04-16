import { HASH_LENGTH } from "../constants";

export const generateHash = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let hash = "";

  for (let i = 0; i < HASH_LENGTH; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }

  return hash;
};
