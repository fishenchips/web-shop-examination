import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Checkout } from "../../components/checkout/Checkout";
import { Order } from "../../types/order";

const CheckoutPage = () => {
  const router = useRouter();
  const toast = useToast();
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

      const data = await response.json();

      console.log(data);

      router.push("/checkout/success");

      toast({
        title: "Order successfully placed.",
        description: "That was expensive, wasn't it?",
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
