import type { NextApiRequest, NextApiResponse } from "next";

/* far from the best solution but its a start */

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ req }, "req from getuser");
  const { cookies } = req;

  const jwt = cookies.AdminJWT || cookies.UserJWT;

  if (!jwt) {
    return res.status(401).json({ message: "Unathorized access" });
  }

  res.status(200).json({ message: "Access granted", req });
};

export default handler;
