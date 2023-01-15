import { MongoClient } from "mongodb";

import { AdminNavigation } from "../../../components/layout/AdminNavigation";

const AdminOrders = (props: any) => {
  const { orders } = props;

  console.log(orders);

  return (
    <>
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
  const client = await MongoClient.connect(process.env.DB_KEY);

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
    },
    revalidate: 10,
  };
}
