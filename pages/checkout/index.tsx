import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";

import { Checkout } from "../../components/checkout/Checkout";
import { Order } from "../../types/order";
import { CartContext } from "../../store/CartContext";

const CheckoutPage = () => {
  const router = useRouter();
  const toast = useToast();

  const cartCtx = useContext(CartContext);
  /* Redirect to /complete-purchase/id for a summary!!  */
  const addOrderHandler = async (enteredOrderData: Order) => {
    try {
      const response = await fetch("/api/new-order", {
        method: "POST",
        body: JSON.stringify(enteredOrderData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data } = await response.json();

      console.log(data, "data from checkout/index");

      router.push(
        {
          pathname: `/checkout/${data._id}`,
          query: {
            billing: JSON.stringify(data.billing),
            payment: JSON.stringify(data.payment),
            /* Pass null if there isnt a user */
            userId: data.userId ? JSON.stringify(data.userId) : null,
          },
        },
        `/checkout/${data._id}`
      );

      cartCtx.clearCart();

      toast({
        title: "Order successfully placed.",
        description: "Thank you for shopping!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Order completion failed.",
        description: "Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return <Checkout onAddOrder={addOrderHandler} />;
};

export default CheckoutPage;
