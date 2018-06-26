import {
  BOOK_SEARCH_REQUEST,
  BOOK_SEARCH_SUCCESS,
  BOOK_SEARCH_UPDATE,
  BOOK_SEARCH_RESET
} from "../constants";

let initialState = {
  pending: false,
  books: [],
  searchQuery: '',
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_SEARCH_REQUEST:
      return {...state, pending: true};
    case BOOK_SEARCH_SUCCESS:
      return {...state, pending: false, books: payload};
    case BOOK_SEARCH_UPDATE:
      return {...state, pending: false, searchQuery: payload};
    case BOOK_SEARCH_RESET:
      return {...state, pending: false, books: [], searchQuery: ''};
    default:
      return state
  }
};