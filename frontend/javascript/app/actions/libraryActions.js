import {
  LIBRARY_BOOKS_REQUEST,
  LIBRARY_BOOKS_SUCCESS,
  LIBRARY_BOOKS_FAILURE,
} from "../constants";
import {API} from "../api";

// Dispatches and action to load all books
// Uses an instance of the Axios library to include the crsf token and my jwt token from sessionStorage
export const loadLibraryBooks = () => {
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