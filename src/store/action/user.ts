import Client from "../../models/Client";
import { SET_USER } from "../actionTypes";

type User = {
  id: string;
  token: string;
};

export function setUser(user: User) {
  return {
    type: SET_USER,
    payload: user,
  };
}
