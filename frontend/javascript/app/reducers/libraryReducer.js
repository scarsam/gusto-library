import {
  LIBRARY_BOOKS_REQUEST,
  LIBRARY_BOOKS_SUCCESS,
  LIBRARY_BOOKS_FAILURE
} from "../constants";

let initialState = {
  books: [],
  pending: false,
  error: null,
};

export const libraryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIBRARY_BOOKS_REQUEST:
      return {...state, pending: true};
    case LIBRARY_BOOKS_SUCCESS:
      return {...state, pending: false, books: payload};
    case LIBRARY_BOOKS_FAILURE:
      return {...state, pending: false, error: payload};
    default:
      return state
  }
};