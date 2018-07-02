import {
  RENTED_BOOKS_REQUEST,
  RENTED_BOOKS_SUCCESS,
  RENTED_BOOKS_FAILURE
} from "../constants";
import {API} from "../api";

export const loadRentedBooks = () => {
  return dispatch => {
    dispatch({type: RENTED_BOOKS_REQUEST});
    API.get('/api/v1/rented_books')
      .then(response => {
        dispatch({type: RENTED_BOOKS_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: RENTED_BOOKS_FAILURE, payload: error.data})
      })
  }
};