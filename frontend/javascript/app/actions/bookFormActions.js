const API_KEY = `${process.env.REACT_APP_API_KEY_GOOGLE_BOOKS}`;
import {
  BOOK_FORM_REQUEST,
  BOOK_FORM_SUCCESS,
  BOOK_FORM_UPDATE,
  BOOK_FORM_RESET
} from "../constants";
import axios from 'axios';

export const submitBookForm = (formData) => {
  return dispatch => {
    dispatch({type: BOOK_FORM_REQUEST});
    axios.get(`https://www.googleapis.com/books/v1/volumes?q="${formData}"&fields=items(volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks)&key=${API_KEY}`)
      .then(response => {
        dispatch({type: BOOK_FORM_SUCCESS, payload: response.data.items});
      });
  };
};

export const updateBookForm = (formData) => {
  const inputValue = formData.target.value;
  return {type: BOOK_FORM_UPDATE, payload: inputValue}
};

export const resetBookForm = () => {
  return {type: BOOK_FORM_RESET}
};