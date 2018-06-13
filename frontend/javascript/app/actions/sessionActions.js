import {CREATE_USERS_FULFILLED, CREATE_USERS_PENDING, CREATE_USERS_REJECTED, LOG_OUT_USER} from "../constants";
import history from '../history'
import {API} from "../api";

export const logInUser = () => {
  return dispatch => {
    dispatch({type: LOGIN_USERS_PENDING});
    API.post('/api/v1/session', userData)
      .then(response => {
        dispatch({type: LOGIN_USERS_FULFILLED, payload: response.data});
        sessionStorage.setItem('jwt', response.data);
        history.push('/')
      })
      .catch(error => {
        dispatch({type: LOGIN_USERS_REJECTED, payload: error.response});
      })
  }
};

export const logOutUser = () => {
  sessionStorage.removeItem('jwt');
  history.push('/signup');
  return {type: LOG_OUT_USER};
};