import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  REMOVE_BOOK_REQUEST,
  REMOVE_BOOK_SUCCESS,
  REMOVE_BOOK_FAILURE,
} from "../constants";

let initialState = {
  book: null,
  added: false,
  removed: false,
  pending: false,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK_REQUEST:
      return {...state, pending: true};
    case ADD_BOOK_SUCCESS:
      return {...state, pending: false, added: true, book: payload};
    case ADD_BOOK_FAILURE:
      return {...state, error: payload, added: false};
    case REMOVE_BOOK_REQUEST:
      return {...state, pending: true, removed: false};
    case REMOVE_BOOK_SUCCESS:
      return {...state, pending: false, removed: true};
    case REMOVE_BOOK_FAILURE:
      return {...state, error: payload, removed: false}
    default:
      return state
  }
};