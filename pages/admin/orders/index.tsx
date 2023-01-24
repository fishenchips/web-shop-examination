import { MongoClient } from "mongodb";
import { useState } from "react";
import Head from "next/head";

import { AdminNavigation } from "../../../components/layout/AdminNavigation";
import { Order } from "../../../types/order";

interface Props {
  orders: Array<Order>;
}

const AdminOrders: React.FC<Props> = ({ orders }) => {
  const [admin, setAdmin] = useState<boolean>(false);

  const checkAdmin = async () => {
    const response = await fetch("/api/users/get-admin");

    const { message } = await response.json();

    if (message === "Access granted") {
      setAdmin(true);
    }
    if (message === "Unathorized access") {
      setAdmin(false);
    }
  };

  checkAdmin();

  if (!admin) return <p>Access denied.</p>;

  return (
    <>
      <Head>
        <title>Admin Orders</title>
      </Head>
      <AdminNavigation />
      <div>
        {orders.map((order: any) => (
          <div key={order.id}>
            <p>Order id: {order.id}</p>
            <p>{order.payment.sum} kr</p>
            {order.payment.items.map((product: any) => (
              <div key={product.id}>
                <p>{product.title}</p>
                <p>amount: {product.amount}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminOrders;

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.DB_KEY as string);

  const db = client.db();

  const ordersCollection = db.collection("orders");

  const orders = await ordersCollection.find().toArray();

  client.close();

  return {
    props: {
      orders: orders.map((order: any) => ({
        billing: order.billing,
        payment: order.payment,
        id: order._id.toString(),
      })),
      revalidate: 10,
    },
  };
}
