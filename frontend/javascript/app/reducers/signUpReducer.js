import {
  CREATE_USER_FULFILLED,
  CREATE_USER_PENDING,
  CREATE_USER_REJECTED
} from "../constants";

let initialState = {
  pending: false,
  fulfilled: false,
  user: {},
  errors: null
};
export const signUpReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER_PENDING:
      return {...state, pending: true};
    case CREATE_USER_FULFILLED:
      return {...state, pending: false, fulfilled: true, user: payload};
    case CREATE_USER_REJECTED:
      return {...state, pending: false, fulfilled: false, user: {}, errors: payload};
    default:
      return state;
  }
};