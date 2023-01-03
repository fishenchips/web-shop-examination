import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { apiKey } from "../../keys/apiKeys";

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

    MongoClient.connect(apiKey);
  }
};

export default handler;
