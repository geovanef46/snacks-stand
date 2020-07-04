import { SET_USER, LOGOUT_USER } from "../actionTypes";

type User = {
  id: string;
  name: string;
  token: string;
};

export function setUser(user: User) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: null,
  };
}
