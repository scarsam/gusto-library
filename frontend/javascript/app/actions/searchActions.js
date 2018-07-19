const API_KEY = `${process.env.API_KEY}`
import axios from 'axios';

import {
  BOOK_SEARCH_REQUEST,
  BOOK_SEARCH_SUCCESS,
  BOOK_SEARCH_UPDATE,
  BOOK_SEARCH_RESET,
} from "../constants";

// Dispatches an action to reset the search input if the input is empty
// If input search query and input data is equal (to prevent, lag in search results) then dispatch an book search success
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

// Dispatches an input field update on changed value
export const updateSearchInput = (formData) => {
  const inputValue = formData.target.value;
  return {type: BOOK_SEARCH_UPDATE, payload: inputValue}
};