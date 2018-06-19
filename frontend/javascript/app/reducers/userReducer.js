import {
  CURRENT_USER_SUCCESS,

} from "../constants";

let initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_USER_SUCCESS:
      return {...state, user: payload};
    default:
      return state
  }
};