import {
  BOOK_FORM_REQUEST,
} from "../constants";
import {API} from "../api";

export const addBook = (book) => {
  return dispatch => {
    API.post('/api/v1/books/sf', book)
      .then(response => {

      })
  }
};