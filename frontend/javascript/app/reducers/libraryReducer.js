import {
  LIBRARY_BOOKS_REQUEST,
  LIBRARY_BOOKS_SUCCESS,
  LIBRARY_BOOKS_FAILURE,
  REMOVE_BOOK_FAILURE,
  REMOVE_BOOK_SUCCESS,
  REMOVE_BOOK_REQUEST,
  RENT_BOOK_SUCCESS,
  RENT_BOOK_REQUEST,
  RENT_BOOK_FAILURE,
  RENTED_BOOKS_SUCCESS,
  RENTED_BOOKS_REQUEST,
  RENTED_BOOKS_FAILURE,
} from "../constants";

let initialState = {
  rentedBooks: [],
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
    case RENTED_BOOKS_REQUEST:
      return {...state, pending: true};
    case RENTED_BOOKS_SUCCESS:
      return {...state, pending: false, rentedBooks: payload};
    case RENTED_BOOKS_FAILURE:
      return {...state, pending: false, error: payload};
    case REMOVE_BOOK_REQUEST:
      return {...state, pending: true};
    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        pending: false,
        books: state.books.filter(book => {
          return book.id !== payload.id
        })
      };
    case REMOVE_BOOK_FAILURE:
      return {...state, error: payload};
    case RENT_BOOK_REQUEST:
      return {...state, pending: true};
    case RENT_BOOK_SUCCESS:
      return {
        ...state,
        pending: false,
        rentedBooks: [...state.rentedBooks, state.books.find(book => book.id === payload.book_id)],
        books: state.books.filter(book => book.id !== payload.book_id),
      };
    case RENT_BOOK_FAILURE:
      return {...state, error: payload};
    default:
      return state
  }
};