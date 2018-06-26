import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
} from "../constants";

let initialState = {
  books: [],
  pending: false,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK_REQUEST:
      return state
    default:
      return state
  }
};