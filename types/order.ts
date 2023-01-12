export interface Order {
  billing?: BillingDetails;
  payment?: PaymentDetails;
}

interface BillingDetails {
  firstName?: string;
  lastName?: string;
  street?: string;
  zip?: number | string;
  city?: string;
  country?: string;
}

interface PaymentDetails {
  sum?: number;
  items?: Array<OrderProduct>;
  /* Add user here later */
}

interface OrderProduct {
  id?: number;
  title?: string;
  price?: number;
  image?: string;
  amount?: number;
}
