import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

import { User } from "../../../types/user";

type Data = {
  user?: User;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "GET") {
    const { id } = req.query;

    const client = await MongoClient.connect(process.env.DB_KEY as string);

    const db = client.db();

    const usersCollection = db.collection("users");

    const result = await usersCollection.findOne({
      _id: new ObjectId(id as string),
    });

    if (!result) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(result as Data);
  }
};

export default handler;
