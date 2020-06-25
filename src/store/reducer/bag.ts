import { Action } from "..";
import { ADD_ITEM_BAG, REMOVE_ITEM_BAG } from "../actionTypes";
import ItemOrder from "../../models/ItemOrder";

interface Item {
  id: string;
}

export interface BagStateType {
  items: Array<ItemOrder>;
}

const items: ItemOrder[] = [
  {
    id: 1,
    amount: 2,
    snack: {
      id: 1,
      description: "Um pastel de frango saboroso",
      name: "Pastel de frango",
    },
    price: 10.5,
  },
  {
    id: 2,
    amount: 3,
    snack: {
      id: 2,
      description: "Um pastel de frango saboroso",
      name: "Pastel de frango",
    },
    price: 10.5,
  },
  {
    id: 3,
    amount: 3,
    snack: {
      id: 2,
      description: "Um pastel de frango saboroso",
      name: "Pastel de frango",
    },
    price: 10.5,
  },
];

const initialState: BagStateType = {
  items,
};

export default function bag(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_ITEM_BAG:
      return Object.assign({}, state, {
        items: state.items.push(action.payload),
      });
    case REMOVE_ITEM_BAG:
      return Object.assign({}, state, {
        items: state.items.filter((item) => item.id !== action.payload.id),
      });
    default:
      return state;
  }
}
