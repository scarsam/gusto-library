import {
  CURRENT_USER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE,
} from "../constants";

let initialState = {
  current_user: {},
  users: [],
  pending: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_USER_SUCCESS:
      return {...state, current_user: payload};
    case ALL_USERS_REQUEST:
      return {...state, pending: true};
    case ALL_USERS_SUCCESS:
      return {...state, pending: false, users: payload};
    case ALL_USERS_FAILURE:
      return {...state, pending: false, error: payload};
    default:
      return state
  }
};