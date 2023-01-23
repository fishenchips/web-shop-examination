import type { NextApiRequest, NextApiResponse } from "next";

/* far from the best solution but its a start */

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cookies } = req;

  const jwt = cookies.AdminJWT || cookies.UserJWT;

  if (!jwt) {
    return res.status(200).json({ message: "Unathorized access" });
  }

  return res.status(200).json({ message: "Access granted" });
};

export default handler;
