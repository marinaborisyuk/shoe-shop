import { CartItem } from "@/providers/shoppingCard";

export interface AddToCartEventData {
  currency: string;
  items: Array<CartItem>;

}