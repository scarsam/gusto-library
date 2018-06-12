import {UPDATE_FORM_NAME, UPDATE_FORM_EMAIL, UPDATE_FORM_PASSWORD} from "../constants";

let initialState = {
  name: '',
  email: '',
  password: '',
};
export const signUpFormReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_FORM_NAME:
      return {...state, name: payload};
    case UPDATE_FORM_EMAIL:
      return {...state, email: payload};
    case UPDATE_FORM_PASSWORD:
      return {...state, password: payload};
    default:
      return state;
  }
};