import {
  LIBRARY_BOOKS_REQUEST,
  LIBRARY_BOOKS_SUCCESS,
  LIBRARY_BOOKS_FAILURE
} from "../constants";
import {API} from "../api";

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