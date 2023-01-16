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

    const serialized = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    client.close();

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: "Success" });
  } else {
    res.json({ message: "Invalid credentials." });
  }
};

export default handler;
