import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from "../constants";

let initialState = {
  notification: null,
};

export const notificationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_NOTIFICATION:
      return {...state, notification: payload};
    case HIDE_NOTIFICATION:
      return {...state, notification: payload};
    default:
      return state
  }
};