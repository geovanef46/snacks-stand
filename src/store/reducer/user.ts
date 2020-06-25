import { SET_USER } from "../actionTypes";

const initialState = {
  user: null,
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
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
