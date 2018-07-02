import {
  RENTED_BOOKS_REQUEST,
  RENTED_BOOKS_SUCCESS,
  RENTED_BOOKS_FAILURE
} from "../constants";

let initialState = {
  books: [],
  pending: false,
  error: null,
};

export const availabilityReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RENTED_BOOKS_REQUEST:
      return {...state, pending: true};
    case RENTED_BOOKS_SUCCESS:
      return {...state, pending: false, rentedBooks: [...state.rentedBooks, payload]};
    case RENTED_BOOKS_FAILURE:
      return {...state, pending: false, error: payload};
    default:
      return state
  }
};