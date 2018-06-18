import {
  CURRENT_USER_REQUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE,
} from "../constants";

let initialState = {
  pending: false,
  user: {},
  errors: null
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_USER_REQUEST:
      return {...state, pending: true};
    case CURRENT_USER_SUCCESS:
      return {...state, pending: false, user: payload};
    case CURRENT_USER_FAILURE:
      return {...state, errors: payload};
    default:
      return state
  }
};