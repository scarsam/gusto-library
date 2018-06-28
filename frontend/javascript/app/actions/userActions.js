import {
  CURRENT_USER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from "../constants";
import {API} from "../api";

export const getCurrentUser = (userData) => {
  return {type: CURRENT_USER_SUCCESS, payload: userData}
};

export const getUser = (id) => {
  return dispatch => {
    dispatch({type: GET_USER_REQUEST});
    API.get(`/api/v1/users/${id}`)
      .then(response => {
        dispatch({type: GET_USER_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: GET_USER_FAILURE, payload: error.data})
      })
  }
};

export const getAllUsers = () => {
  return dispatch => {
    dispatch({type: ALL_USERS_REQUEST});
    API.get('/api/v1/users')
      .then(response => {
        dispatch({type: ALL_USERS_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dipatch({type: ALL_USERS_FAILURE, payload: error.data})
      })
  }
};