import type { NextApiRequest, NextApiResponse } from "next";

/* far from the best solution but its a start */

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { cookies } = req;

  const jwt = cookies.AdminJWT;

  if (!jwt) {
    /* changing to 200, otherwise console will be packed with errors */
    res.status(200).json({ message: "Unathorized access" });
  }

  res.status(200).json({ message: "Access granted" });
};

export default handler;
