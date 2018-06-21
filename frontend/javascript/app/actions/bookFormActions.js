const API_KEY = `${process.env.REACT_APP_API_KEY_GOOGLE_BOOKS}`;
import {
  BOOK_FORM_REQUEST,
  BOOK_FORM_SUCCESS,
  BOOK_FORM_UPDATE,
  BOOK_FORM_RESET
} from "../constants";
import axios from 'axios';

export const submitBookForm = (formData) => {
  this.search = formData;
  if (formData === '') {
    return {type: BOOK_FORM_RESET}
  }
  return dispatch => {
    dispatch({type: BOOK_FORM_REQUEST});
    axios.get(`https://www.googleapis.com/books/v1/volumes?q="${formData}"&fields=items(volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks)&maxResults=20&key=${API_KEY}`)
      .then(response => {
        if (this.search === formData) {
          dispatch({type: BOOK_FORM_SUCCESS, payload: response.data.items});
        }
      });
  };
};

export const updateBookForm = (formData) => {
  const inputValue = formData.target.value;
  return {type: BOOK_FORM_UPDATE, payload: inputValue}
};

export const addBook = (book) => {

};