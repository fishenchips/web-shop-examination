import { CartProduct } from "./product";

export interface LocalStorageCart {
  items: string | never[];
  totalAmount: number | string;
}
