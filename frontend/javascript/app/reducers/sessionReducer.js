import {LOG_OUT_USER} from "../constants";

let initialState = {
  loggedOut: false,
};

export const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_OUT_USER:
      return {...state, loggedOut: true};
    default:
      return state
  }
};