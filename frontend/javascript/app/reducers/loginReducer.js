import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "../constants";

let initialState = {
  pending: false,
  loggedIn: false,
  loggedOut: true,
  session: !!sessionStorage.jwt,
  errors: null
};

export const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {...state, pending: true};
    case LOGIN_SUCCESS:
      return {...state, pending: false, loggedOut: false, loggedIn: true, session: !!sessionStorage.jwt};
    case LOGIN_FAILURE:
      return {...state, pending: false, loggedIn: false, errors: payload};
    case LOGOUT_SUCCESS:
      return {...state, loggedOut: true, loggedIn: false, session: !!sessionStorage.jwt};
    default:
      return state
  }
};