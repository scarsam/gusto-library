import {
  BOOK_FORM_REQUEST,
  BOOK_FORM_SUCCESS,
  BOOK_FORM_UPDATE,
  BOOK_FORM_RESET
} from "../constants";

let initialState = {
  pending: false,
  books: [],
  searchQuery: '',
};

export const bookFormReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_FORM_REQUEST:
      return {...state, pending: true};
    case BOOK_FORM_SUCCESS:
      return {...state, pending: false, books: payload};
    case BOOK_FORM_UPDATE:
      return {...state, pending: false, searchQuery: payload};
    case BOOK_FORM_RESET:
      return {...state, pending: false, books: [], searchQuery: ''};
    default:
      return state
  }
};