import {CREATE_USERS_FULFILLED, CREATE_USERS_PENDING, CREATE_USERS_REJECTED} from "../constants";

let initialState = {
  pending: false,
  fulfilled: false,
  user: {},
  errors: null
};
export const signUpReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USERS_PENDING:
      return {...state, pending: true};
    case CREATE_USERS_FULFILLED:
      return {...state, pending: false, fulfilled: true, user: payload};
    case CREATE_USERS_REJECTED:
      return {...state, pending: false, fulfilled: false, user: {}, errors: payload};
    default:
      return state;
  }
};