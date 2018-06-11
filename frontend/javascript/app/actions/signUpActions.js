import {SIGNUP_REQUEST} from "../constants";

export const userSignUp = (userData) => {
  return dispatch => {
    return axios.post('/api/users', userData)
  }
};