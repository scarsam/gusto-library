import {
  USER_SESSION_PENDING,
  USER_SESSION_FULFILLED,
  USER_SESSION_REJECTED,
} from "../constants";
import history from '../history'
import {API} from "../api";

export const createUserSessionSuccess = (userData) => {
  return dispatch => {
    dispatch({type: USER_SESSION_PENDING});
    API.post('/api/v1/sessions', userData.profileObj)
      .then(response => {
        dispatch({type: USER_SESSION_FULFILLED, payload: response.data});
        sessionStorage.setItem('jwt', response.data);
        history.push('/')
      })
      .catch(error => {
        debugger
      })
  };
};

export const createUserSessionFailure = (error) => {
  return {type: USER_SESSION_REJECTED, payload: error}
};

export const destroyUserSession = () => {
  history.push('/signup');
  return {type: USER_SESSION_PENDING};
};