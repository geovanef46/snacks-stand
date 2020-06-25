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
        const newItem = Object.assign({}, itemAdd, {
          amount: itemAdd.amount + 1,
        });

        return Object.assign({}, state, {
          items: [
            ...state.items.filter(
              (itemList) => itemList.snack.id !== newItem.snack.id
            ),
            newItem,
          ],
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
        const newItem = Object.assign({}, item, {
          amount: action.payload.amount,
          price: action.payload.price,
        });

        return Object.assign({}, state, {
          items: [
            ...state.items.filter(
              (itemList) => itemList.snack.id !== newItem.snack.id
            ),
            newItem,
          ],
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
