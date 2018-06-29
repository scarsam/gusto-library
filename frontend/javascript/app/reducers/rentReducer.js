import {
  RENT_BOOK_REQUEST,
  RENT_BOOK_SUCCESS,
  RENT_BOOK_FAILURE,
} from "../constants";

let initialState = {
  books: [],
  pending: false,
  error: null,
};

export const rentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RENT_BOOK_REQUEST:
      return {...state, pending: true};
    case RENT_BOOK_SUCCESS:
      return {...state, pending: false, books: [...state.books, payload]};
    case RENT_BOOK_FAILURE:
      return {...state, error: payload};
    default:
      return state
  }
};