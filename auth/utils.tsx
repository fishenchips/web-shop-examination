import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

import { User } from "../types/user";

// function that hashes the password - that will be saved in the DB
export const hashPassword = (password: string) => {
  //8 is difficulty settings - to high number makes the server slow
  const hashValue = bcrypt.hashSync(password, 8);

  return hashValue;
};

//compare hashed password from db with password from the request
export const comparePassword = (password: string, hash: string) => {
  const correct = bcrypt.compareSync(password, hash); // true or false

  return correct;
};

export const getJWTToken = (user: User) => {
  const userData = {
    userId: user.id,
    username: user.userName,
  };

  const accessToken = Jwt.sign(userData, process.env.SECRET as string);

  return accessToken; // send back to the user to they can prove that they are they
};

//is the token signed by user?
export const verifyJWT = (token: string) => {
  return Jwt.verify(token, process.env.SECRET as string);
};

export const decodeJWT = (token: string) => {
  return Jwt.decode(token, process.env.SECRET as any);
}; //if above is yes, send back data to user
