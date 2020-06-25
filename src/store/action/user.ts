import Client from "../../models/Client";
import { SET_USER } from "../actionTypes";

export function setUser(user: Client) {
  return {
    type: SET_USER,
    payload: user,
  };
}
