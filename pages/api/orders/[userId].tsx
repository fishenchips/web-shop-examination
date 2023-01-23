import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { userId } = req.query;

    const client = await MongoClient.connect(process.env.DB_KEY as string);

    const db = client.db();

    const ordersCollection = db.collection("orders");

    const orders = await ordersCollection
      .find({
        userId: userId as string,
      })
      .toArray();

    client.close();

    if (!orders) {
      res.status(404).json({ message: "No orders by user found" });
    }

    res.status(200).json({ orders });
  }
};
export default handler;
