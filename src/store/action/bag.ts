import {
  ADD_ITEM_BAG,
  REMOVE_ITEM_BAG,
  ALTER_AMOUNT_ITEM,
} from "../actionTypes";
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

export function alterAmountItem(item: ItemOrder) {
  return {
    type: ALTER_AMOUNT_ITEM,
    payload: item,
  };
}
