import {
  CURRENT_USER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE,
} from "../constants";
import {API} from "../api";

export const getCurrentUser = (userData) => {
  return {type: CURRENT_USER_SUCCESS, payload: JSON.parse(userData)}
};

export const getAllUsers = () => {
  return dispatch => {
    dispatch({type: ALL_USERS_REQUEST});
    API.get('/api/v1/users')
      .then(response => {
        dispatch({type: ALL_USERS_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dipatch({type: ALL_USERS_FAILURE, payload: error.response.data})
      })
  }
};