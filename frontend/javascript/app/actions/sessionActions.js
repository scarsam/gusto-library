import {
  LOG_IN_USER_FULFILLED,
  LOG_IN_USER_PENDING,
  LOG_IN_USER_REJECTED,
  LOG_OUT_USER_FULFILLED
} from "../constants";
import history from '../history'
import {API} from "../api";

export const logInUser = () => {
  history.push('/auth/google_oauth2');
  return {type: LOG_IN_USER_PENDING};
};

export const logOutUser = () => {
  sessionStorage.removeItem('jwt');
  history.push('/signup');
  return {type: LOG_OUT_USER_FULFILLED};
};