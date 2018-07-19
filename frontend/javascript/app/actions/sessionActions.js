import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "../constants";
import history from '../history'
import {API} from "../api";

// Dispatches an login action and also stores the jwt token from backend together with the user object
// It then redirects the user into the application from importing history from react router
export const loginUser = (userData) => {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST});
    API.post('/api/v1/sessions', userData.profileObj)
      .then(response => {
        console.log(response);
        sessionStorage.setItem('jwt', response.data.token);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch({type: LOGIN_SUCCESS, payload: response.data});
        history.push('/')
      });
  };
};

export const loginError = (error) => {
  console.log(error);
  return {type: LOGIN_FAILURE, payload: error}
};

// Removes the stored jwt token and user object from sessionStorage
// And redirects the user to the login page
export const logoutUser = () => {
  sessionStorage.removeItem('jwt');
  sessionStorage.removeItem('user');
  history.push('/login');
  return {type: LOGOUT_SUCCESS};
};