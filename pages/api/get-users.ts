import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.DB_KEY);

    const db = client.db();

    const usersCollection = db.collection("users");

    const result = await usersCollection.find(data).toArray();

    console.log(result);

    res.status(200).json(result);
  }
};

export default handler;
