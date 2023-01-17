import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

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

    const client = await MongoClient.connect(process.env.DB_KEY as string);

    const db = client.db();

    const usersCollection = db.collection("users");

    const users = await usersCollection.find().toArray();

    const taken = users.some((user) => user.userName === data.userName);

    console.log("taken", taken);

    if (taken) {
      client.close();

      res.status(409).json({ message: "Username already taken." });
    }

    const result = await usersCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "User added." });
  }
};

export default handler;
