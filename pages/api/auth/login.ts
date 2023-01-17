import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { enteredUserName, enteredPassword } = req.body;

  const client = await MongoClient.connect(process.env.DB_KEY as string);

  const db = client.db();

  const usersCollection = db.collection("users");

  const DBUser = await usersCollection.findOne({
    userName: enteredUserName,
    password: enteredPassword,
  });

  /* Check if DB user exists */
  if (
    DBUser?.userName === enteredUserName &&
    DBUser?.password === enteredPassword
  ) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        userName: enteredUserName,
      },
      secret as string
    );

    if (DBUser?.role === "admin") {
      const serialized = serialize("AdminJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
    }

    if (DBUser?.role === "user") {
      const serialized = serialize("UserJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialized);
    }

    client.close();

    res.status(200).json({ message: "Success", DBUser });
  } else {
    res.status(401).json({ message: "Invalid credentials." });
  }
};

export default handler;
