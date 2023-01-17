import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    res.json({ message: "No user logged in," });
  }

  /* wants string as second arg */
  const serialized = serialize("OursiteJWT", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: -1, // expires
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  res.status(200).json({ message: "User logged out." });
};

export default handler;
