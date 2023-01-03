import type { NextApiRequest, NextApiResponse } from "next";

// url of file /api/new-user

type role = "user" | "admin";

type Data = {
  userName: string;
  password: string;
  role: role;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    const { userName, password, role } = data;
  }
};

export default handler;
