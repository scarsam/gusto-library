import {
  CURRENT_USER_REQUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE, LOGIN_SUCCESS,
} from "../constants";
import history from '../history'
import {API} from "../api";

export const currentUser = () => {
  return dispatch => {
    dispatch({type: CURRENT_USER_REQUEST});
    API.get('/api/v1/users/current_user')
      .then(response => {
        dispatch({type: CURRENT_USER_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({type: CURRENT_USER_FAILURE, payload: error.response.data});
      })
  }
};