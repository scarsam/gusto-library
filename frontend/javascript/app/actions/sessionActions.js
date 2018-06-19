import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "../constants";
import history from '../history'
import {API} from "../api";

export const loginUser = (userData) => {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST});
    API.post('/api/v1/sessions', userData.profileObj)
      .then(response => {
        sessionStorage.setItem('jwt', response.data.token);
        sessionStorage.setItem('user', response.data.user);
        dispatch({type: LOGIN_SUCCESS, payload: response.data});
        history.push('/')
      });
  };
};

export const loginError = (error) => {
  return {type: LOGIN_FAILURE, payload: error}
};

export const logoutUser = () => {
  sessionStorage.removeItem('jwt');
  sessionStorage.removeItem('user');
  history.push('/login');
  return {type: LOGOUT_SUCCESS};
};