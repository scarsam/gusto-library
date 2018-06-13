import history from '../history'
import { API } from '../api'
import {
  CREATE_USER_PENDING,
  CREATE_USER_REJECTED,
  CREATE_USER_FULFILLED
} from "../constants";

export const signUpUser = (userData) => {
  return dispatch => {
    dispatch({type: CREATE_USER_PENDING});
    API.post('/api/v1/users', userData)
      .then(response => {
        dispatch({type: CREATE_USER_FULFILLED, payload: response.data});
        sessionStorage.setItem('jwt', response.data);
        history.push('/')
      })
      .catch(error => {
        dispatch({type: CREATE_USER_REJECTED, payload: error.response});
      })
  }
};