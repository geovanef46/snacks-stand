import { SET_USER } from "../actionTypes";

export interface UserStateType {
  user: string;
  token: string;
}

const initialState: UserStateType = {
  user: "",
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
        user: action.payload.id,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
