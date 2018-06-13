import {
  LOG_IN_USER_FULFILLED,
  LOG_IN_USER_PENDING,
  LOG_IN_USER_REJECTED,
  LOG_OUT_USER_FULFILLED
} from "../constants";
import history from '../history'
import {API} from "../api";

export const logInUser = (userData) => {
  return dispatch => {
    dispatch({type: LOG_IN_USER_PENDING});
    API.post('/api/v1/sessions', userData)
      .then(response => {
        dispatch({type: LOG_IN_USER_FULFILLED, payload: response.data});
        sessionStorage.setItem('jwt', response.data);
        history.push('/')
      })
      .catch(error => {
        dispatch({type: LOG_IN_USER_REJECTED, payload: error.response});
      })
  }
};

export const logOutUser = () => {
  sessionStorage.removeItem('jwt');
  history.push('/signup');
  return {type: LOG_OUT_USER_FULFILLED};
};