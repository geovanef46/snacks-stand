import { ADD_ITEM_BAG, REMOVE_ITEM_BAG } from "../actionTypes";
import ItemOrder from "../../models/ItemOrder";

export function addItem(item: ItemOrder) {
  return {
    type: ADD_ITEM_BAG,
    payload: item,
  };
}

export function removeItem(item: ItemOrder) {
  return {
    type: REMOVE_ITEM_BAG,
    payload: item,
  };
}
