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
  ADD_BOOK_REQUEST,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from "../constants";
import {API} from "../api";

// Dispatches and action to create a new rented book, it takes the created book and adds it to the join table
// After the promise is resolved it will dispatch the notification action
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
      .then(() => {
        dispatch({type: SHOW_NOTIFICATION, payload: 'Book Rented from Library'});
        setTimeout(() => {
          dispatch({type: HIDE_NOTIFICATION, payload: null});
        }, 3000)
      })
  }
};

// Dispatches and action to delete a rented book, it takes the clicked book and removes it from the join table
// After the promise is resolved it will dispatch the notification action
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
      .then(() => {
        dispatch({type: SHOW_NOTIFICATION, payload: 'Book Returned to Library'});
        setTimeout(() => {
          dispatch({type: HIDE_NOTIFICATION, payload: null});
        }, 3000)
      })
  }
};

// Dispatches and action to delete a book, it takes the clicked book and removes it from the book table
// After the promise is resolved it will dispatch the notification action
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
      .then(() => {
        dispatch({type: SHOW_NOTIFICATION, payload: 'Book Removed from Library'});
        setTimeout(() => {
          dispatch({type: HIDE_NOTIFICATION, payload: null});
        }, 3000)
      })
  }
};

// Dispatches and action to create a book, it takes the clicked book and adds it to the book table
// After the promise is resolved it will dispatch the notification action
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
      .then(() => {
        dispatch({type: SHOW_NOTIFICATION, payload: 'Book Added to Library'});
        setTimeout(() => {
          dispatch({type: HIDE_NOTIFICATION, payload: null});
        }, 3000)
      })
  }
};