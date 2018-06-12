import {UPDATE_FORM_NAME, UPDATE_FORM_EMAIL, UPDATE_FORM_PASSWORD} from "../constants";

export const signUpForm = (formData) => {
  const {name, email, password} = formData;
  if (name) {
    return {type: UPDATE_FORM_NAME, payload: name}
  } else if (email) {
    return {type: UPDATE_FORM_EMAIL, payload: email}
  } else if (password) {
    return {type: UPDATE_FORM_PASSWORD, payload: password}
  }
};