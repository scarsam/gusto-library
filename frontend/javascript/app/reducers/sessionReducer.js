import {
  LOG_IN_USER_FULFILLED,
  LOG_IN_USER_PENDING,
  LOG_IN_USER_REJECTED,
  LOG_OUT_USER_FULFILLED
} from "../constants";

let initialState = {
  pending: false,
  loggedIn: false,
  loggedOut: false,
  user: {},
  errors: null
};

export const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN_USER_PENDING:
      return {...state, pending: true};
    case LOG_IN_USER_FULFILLED:
      return {...state, pending: false, loggedIn: true, user: payload};
    case LOG_IN_USER_REJECTED:
      return {...state, pending: false, loggedIn: false, errors: payload};
    case LOG_OUT_USER_FULFILLED:
      return {...state, loggedOut: true, user: {}};
    default:
      return state
  }
};