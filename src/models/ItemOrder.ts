import Snack from "./Snack";

export default interface ItemOrder {
  id?: number;
  snack: Snack;
  amount: number;
  price: number;
}
