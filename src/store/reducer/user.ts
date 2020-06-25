import { SET_USER } from "../actionTypes";

export interface UserStateType {
  id: string;
  name: string;
  token: string;
}

const initialState: UserStateType = {
  id: "",
  name: "",
  token: "",
};

type Action = {
  type: string;
  payload: any;
};

export default function user(state = initialState, action: Action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        token: action.payload.token,
      };
    default:
      return state;
  }
}