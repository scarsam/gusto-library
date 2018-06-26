import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  LIBRARY_BOOKS_REQUEST,
  LIBRARY_BOOKS_SUCCESS,
  LIBRARY_BOOKS_FAILURE
} from "../constants";
import {API} from "../api";

export const addBook = (book) => {
  return dispatch => {
    ADD_BOOK_REQUEST
    API.post('/api/v1/books', book)
      .then(response => {
        dispatch({type: ADD_BOOK_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: ADD_BOOK_FAILURE, payload: error.data})
      })
  }
};

export const loadExistingBooks = () => {
  return dispatch => {
    dispatch({type: LIBRARY_BOOKS_REQUEST});
    API.get('/api/v1/books')
      .then(response => {
        dispatch({type: LIBRARY_BOOKS_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: LIBRARY_BOOKS_FAILURE, payload: error})
      })
  }
};