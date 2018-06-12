import { API } from '../api'
import {CREATE_USERS_PENDING, CREATE_USERS_REJECTED, CREATE_USERS_FULFILLED} from "../constants";

export const signUp = (userData) => {
  return dispatch => {
    dispatch({type: CREATE_USERS_PENDING});
    API.post('/api/v1/users', userData)
      .then(response => {
        dispatch({type: CREATE_USERS_FULFILLED, payload: response.data});
        sessionStorage.setItem('jwt', response.data);
      })
      .catch(error => {
        dispatch({type: CREATE_USERS_REJECTED, payload: error.response});
      })
  }
};