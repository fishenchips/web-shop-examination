import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { User } from "../../types/user";

type AuthUser = {
  username: string;
  password: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<any> => {
  const data = req.body;

  const client = await MongoClient.connect(process.env.DB_KEY as string);

  const db = client.db();

  const usersCollection = db.collection("users");

  const result = await usersCollection.find(data).toArray();

  const validUser = result.reduce((foundUser: AuthUser |null, user) =>  );

  console.log(result);

  res.status(200).json(result as Data);
};

export default handler;
