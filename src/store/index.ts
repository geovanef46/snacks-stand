import { combineReducers, createStore } from "redux";

import user, { UserStateType } from "./reducer/user";

const reducers = combineReducers({
  user,
});

const store = createStore(reducers);

export interface StateType {
  user: UserStateType;
}

export default store;
