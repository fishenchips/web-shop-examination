import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getOrdersByUserId } from "../../../queries/orders/order-queries";
import { Order } from "../../../types/order";
import styles from "./UserOrders.module.css";

interface Props {
  id: string;
}

export const UserOrders: React.FC<Props> = ({ id }) => {
  const queryClient = useQueryClient();

  /* invalidate orders list to make sure its updated */
  queryClient.invalidateQueries(["userOrders", id]);

  /* Get orders by logged in userId */
  const { data: userOrders } = useQuery(["userOrders", id], () =>
    getOrdersByUserId(id)
  );

  return (
    <div>
      <h4 className={styles.header}>Order History</h4>
      {!userOrders && <p>You have not completed any orders yet..</p>}
      <div>
        {userOrders?.orders.map((order: Order) => (
          <div key={order._id} className={styles.orderSummary}>
            <p>
              Order number: <strong>{order._id}</strong>
            </p>
            <p>
              Sum: <strong>{order.payment?.sum} kr</strong>
            </p>
            <div className={styles.items}>
              {order!.payment!.items!.map((item) => (
                <div key={item.id}>
                  <p>
                    {item.title} x{item.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
