import {
  BOOK_SEARCH_REQUEST,
  BOOK_SEARCH_SUCCESS,
  BOOK_SEARCH_UPDATE,
  BOOK_SEARCH_RESET
} from "../constants";

let initialState = {
  pending: false,
  searchResults: [],
  searchQuery: '',
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_SEARCH_REQUEST:
      return {...state, pending: true};
    case BOOK_SEARCH_SUCCESS:
      return {...state, pending: false, searchResults: payload};
    case BOOK_SEARCH_UPDATE:
      return {...state, pending: false, searchQuery: payload};
    case BOOK_SEARCH_RESET:
      return {...state, pending: false, searchResults: [], searchQuery: ''};
    default:
      return state
  }
};