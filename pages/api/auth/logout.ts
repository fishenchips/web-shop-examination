import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { cookies } = req;

  console.log(cookies, "name");

  const key = Object.keys(cookies);

  console.log(Object.keys(cookies), "keys");

  if (key.includes("AdminJWT")) {
    const jwt = cookies.AdminJWT;

    if (!jwt) {
      res.json({ message: "No user logged in," });
    }

    /* wants string as second arg */
    const serialized = serialize("AdminJWT", "null", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1, // expires
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
  }

  if (key.includes("UserJWT")) {
    const jwt = cookies.UserJWT;

    if (!jwt) {
      res.json({ message: "No user logged in," });
    }

    /* wants string as second arg */
    const serialized = serialize("UserJWT", "null", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1, // expires
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
  }
  res.status(200).json({ message: "User logged out." });
};

export default handler;
