import {
  RENT_BOOK_REQUEST,
  RENT_BOOK_SUCCESS,
  RENT_BOOK_FAILURE,
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
    API.delete('/api/v1/rented_books', book)
      .then(response => {
        dispatch({type: RETURN_BOOK_SUCCESS, payload: book})
      })
      .catch(error => {
        dispatch({type: RETURN_BOOK_FAILURE, payload: error.data})
      })
  }
};

export const loadRentedBooks = () => {
  return dispatch => {
  //  LOAD ALL RENTED BOOKS
  }
};