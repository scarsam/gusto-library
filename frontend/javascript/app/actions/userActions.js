import {
  CURRENT_USER_SUCCESS,
} from "../constants";

export const getUser = (userData) => {
  return {type: CURRENT_USER_SUCCESS, payload: userData}
};