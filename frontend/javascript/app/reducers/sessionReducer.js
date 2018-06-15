import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "../constants";

let initialState = {
  pending: false,
  loggedIn: !!sessionStorage.jwt,
  errors: null
};

export const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {...state, pending: true};
    case LOGIN_SUCCESS:
      return {...state, pending: false, loggedIn: !!sessionStorage.jwt};
    case LOGIN_FAILURE:
      return {...state, errors: payload};
    case LOGOUT_SUCCESS:
      return {...state, loggedIn: !!sessionStorage.jwt};
    default:
      return state
  }
};