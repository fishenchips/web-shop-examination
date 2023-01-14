import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import { apiKey } from "../../keys/apiKeys";
import { Order } from "../../types/order";

type Data = {
  order?: Order;
  message: string;
  data: any;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(apiKey);

    const db = client.db();

    const ordersCollection = db.collection("orders");

    const result = await ordersCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Order sent.", data: data });
  }
};

export default handler;