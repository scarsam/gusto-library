import {
  RETURN_BOOK_REQUEST,
  RETURN_BOOK_SUCCESS,
  RETURN_BOOK_FAILURE,
} from "../constants";

let initialState = {
  book: null,
  pending: false,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETURN_BOOK_REQUEST:
      return {...state, pending: true};
    case RETURN_BOOK_SUCCESS:
      return {...state, book: payload};
    case RETURN_BOOK_FAILURE:
      return {...state, error: payload};
    default:
      return state
  }
};