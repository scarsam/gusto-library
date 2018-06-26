import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
} from "../constants";
import {API} from "../api";

export const addBook = (book) => {
  return dispatch => {
    ADD_BOOK_REQUEST
    API.post('/api/v1/books', book)
      .then(response => {
        dispatch({type: ADD_BOOK_SUCCESS, payload: book})
      })
      .catch(error => {
        dispatch({type: ADD_BOOK_FAILURE, payload: error.data})
      })
  }
};