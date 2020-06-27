import { Action } from "..";
import {
  ADD_ITEM_BAG,
  REMOVE_ITEM_BAG,
  ALTER_AMOUNT_ITEM,
} from "../actionTypes";
import ItemOrder from "../../models/ItemOrder";

export interface BagStateType {
  items: Array<ItemOrder>;
}

const initialState: BagStateType = {
  items: [],
};

const getItem = (items: Array<ItemOrder>, itemS: ItemOrder) => {
  return items.find((item) => item.snack.id === itemS.snack.id);
};

export default function bag(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_ITEM_BAG:
      const itemAdd = getItem(state.items, action.payload);

      if (itemAdd) {
        return Object.assign({}, state, {
          items: state.items.map((itemList) => {
            if (itemList.snack.id === action.payload.snack.id)
              return {
                ...itemList,
                amount: itemAdd.amount + 1,
              };
            return itemList;
          }),
        });
      } else {
        return Object.assign({}, state, {
          items: [...state.items, action.payload],
        });
      }
    case REMOVE_ITEM_BAG:
      return Object.assign({}, state, {
        items: state.items.filter((item) => item.id !== action.payload.id),
      });
    case ALTER_AMOUNT_ITEM:
      const item = getItem(state.items, action.payload);

      if (item) {
        return Object.assign({}, state, {
          items: state.items.map((itemList) => {
            if (itemList.snack.id === action.payload.snack.id)
              return {
                ...itemList,
                amount: action.payload.amount,
                price: action.payload.price,
              };
            return itemList;
          }),
        });
      } else {
        return Object.assign({}, state, {
          items: [...state.items, action.payload],
        });
      }
    default:
      return state;
  }
}
