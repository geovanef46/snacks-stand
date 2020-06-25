import { Action } from "..";
import { ADD_ITEM_BAG, REMOVE_ITEM_BAG } from "../actionTypes";
import ItemOrder from "../../models/ItemOrder";

export interface BagStateType {
  items: Array<ItemOrder>;
}

const initialState: BagStateType = {
  items: [],
};

export default function bag(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_ITEM_BAG:
      return Object.assign({}, state, {
        items: [...state.items, action.payload],
      });
    case REMOVE_ITEM_BAG:
      return Object.assign({}, state, {
        items: state.items.filter((item) => item.id !== action.payload.id),
      });
    default:
      return state;
  }
}
