import Snack from "./Snack";

export default interface ItemOrder {
  id?: number;
  amount: number;
  price: number;
  snack: Snack;
}
