import {
  RENT_BOOK_REQUEST,
  RENT_BOOK_SUCCESS,
  RENT_BOOK_FAILURE,
  RETURN_BOOK_REQUEST,
  RETURN_BOOK_SUCCESS,
  RETURN_BOOK_FAILURE,
  REMOVE_BOOK_FAILURE,
  REMOVE_BOOK_SUCCESS,
  REMOVE_BOOK_REQUEST,
  ADD_BOOK_FAILURE,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_REQUEST
} from "../constants";
import {API} from "../api";

export const rentBook = (book) => {
  return dispatch => {
    dispatch({type: RENT_BOOK_REQUEST});
    API.post('/api/v1/rented_books', book)
      .then(response => {
        dispatch({type: RENT_BOOK_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: RENT_BOOK_FAILURE, payload: error.data})
      })
  }
};

export const returnBook = (book) => {
  return dispatch => {
    dispatch({type: RETURN_BOOK_REQUEST});
    API.delete(`/api/v1/rented_books/${book.id}`)
      .then(response => {
        dispatch({type: RETURN_BOOK_SUCCESS, payload: book})
      })
      .catch(error => {
        dispatch({type: RETURN_BOOK_FAILURE, payload: error.data})
      })
  }
};

export const removeBook = (book) => {
  return dispatch => {
    dispatch({type: REMOVE_BOOK_REQUEST});
    API.delete(`/api/v1/books/${book.id}`)
      .then(response => {
        dispatch({type: REMOVE_BOOK_SUCCESS, payload: book})
      })
      .catch(error => {
        dispatch({type: REMOVE_BOOK_FAILURE, payload: 'Failed to remove book'})
      })
  }
};

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