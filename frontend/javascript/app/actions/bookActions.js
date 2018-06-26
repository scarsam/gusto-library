import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  REMOVE_BOOK_REQUEST,
  REMOVE_BOOK_SUCCESS,
  REMOVE_BOOK_FAILURE,
} from "../constants";
import {API} from "../api";

export const addBook = (book) => {
  return dispatch => {
    dispatch({type: ADD_BOOK_REQUEST});
    API.post('/api/v1/books', book)
      .then(response => {
        dispatch({type: ADD_BOOK_SUCCESS, payload: book})
      })
      .catch(error => {
        dispatch({type: ADD_BOOK_FAILURE, payload: error.data})
      })
  }
};

export const removeBook = (book) => {
  return dispatch => {
    dispatch({type: REMOVE_BOOK_REQUEST})
    API.delete(`/api/v1/books/${book.id}`)
      .then(response => {
        dispatch({type: REMOVE_BOOK_SUCCESS})
      })
      .catch(error => {
        dispatch({type: REMOVE_BOOK_FAILURE})
      })
  }
};