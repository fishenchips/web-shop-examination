import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { apiKey } from "../../keys/apiKeys";

// url of file /api/new-user

type Data = {
  userName?: string;
  password?: string;
  role?: string;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.DB_KEY);

    const db = client.db();

    const usersCollection = db.collection("users");

    const result = await usersCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "User added." });
  }
};

export default handler;
