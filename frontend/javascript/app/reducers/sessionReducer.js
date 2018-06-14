import {
  USER_SESSION_PENDING,
  USER_SESSION_FULFILLED,
  USER_SESSION_REJECTED,
  USER_SESSION_DESTROYED
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
    case USER_SESSION_PENDING:
      return {...state, pending: true};
    case USER_SESSION_FULFILLED:
      return {...state, pending: false, loggedIn: true, user: payload};
    case USER_SESSION_REJECTED:
      return {...state, pending: false, loggedIn: false, errors: payload};
    case USER_SESSION_DESTROYED:
      return {...state, loggedOut: true, user: {}};
    default:
      return state
  }
};