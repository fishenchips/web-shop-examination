import { ObjectId } from "mongodb";

export interface Order {
  billing?: BillingDetails;
  payment?: PaymentDetails;
  id?: ObjectId;
}

export interface BillingDetails {
  firstName?: string;
  lastName?: string;
  street?: string;
  zip?: number | string;
  city?: string;
  country?: string;
}

export interface PaymentDetails {
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
