const API_KEY = `${process.env.REACT_APP_API_KEY_GOOGLE_BOOKS}`;
import {
  BOOK_SEARCH_REQUEST,
  BOOK_SEARCH_SUCCESS,
  BOOK_SEARCH_UPDATE,
  BOOK_SEARCH_RESET
} from "../constants";
import axios from 'axios';

export const searchInput = (formData) => {
  this.search = formData;
  if (formData === '') {
    return {type: BOOK_SEARCH_RESET}
  }
  return dispatch => {
    dispatch({type: BOOK_SEARCH_REQUEST});
    axios.get(`https://www.googleapis.com/books/v1/volumes?q="${formData}"&fields=items(volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks)&maxResults=20&key=${API_KEY}`)
      .then(response => {
        if (this.search === formData) {
          dispatch({type: BOOK_SEARCH_SUCCESS, payload: response.data.items});
        }
      });
  };
};

export const updateSearchInput = (formData) => {
  const inputValue = formData.target.value;
  return {type: BOOK_SEARCH_UPDATE, payload: inputValue}
};