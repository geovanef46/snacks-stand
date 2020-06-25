import { combineReducers, createStore } from "redux";

import user, { UserStateType } from "./reducer/user";
import bag, { BagStateType } from "./reducer/bag";

const reducers = combineReducers({
  user,
  bag,
});

const store = createStore(reducers);

export interface StateType {
  user: UserStateType;
  bag: BagStateType;
}

export interface Action {
  type: string;
  payload: any;
}

export default store;
