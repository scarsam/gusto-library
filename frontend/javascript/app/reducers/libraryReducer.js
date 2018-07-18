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
  RETURN_BOOK_REQUEST,
  RETURN_BOOK_SUCCESS,
  RETURN_BOOK_FAILURE,
} from "../constants";

let initialState = {
  rentedBooks: [],
  availableBooks: [],
  pending: false,
  error: null,
};

export const libraryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIBRARY_BOOKS_REQUEST:
      return {...state, pending: true};
    case LIBRARY_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false,
        // Filtering out rented books and available books
        // Rented books will have an rented_book key with it's associated data
        // Available books will have an rented_book key set to null
        rentedBooks: payload.filter(libraryBook => libraryBook.rented_book !== null),
        availableBooks: payload.filter(libraryBook => libraryBook.rented_book === null)
      };
    case LIBRARY_BOOKS_FAILURE:
      return {...state, pending: false, error: payload};
    case REMOVE_BOOK_REQUEST:
      return {...state, pending: true};
    case REMOVE_BOOK_SUCCESS:
      return {
        ...state,
        pending: false,
        availableBooks: state.availableBooks.filter(book => book.id !== payload.id)
      };
    case REMOVE_BOOK_FAILURE:
      return {...state, error: payload};
    case RENT_BOOK_REQUEST:
      return {...state, pending: true};
    case RENT_BOOK_SUCCESS:
      return {
        ...state,
        pending: false,
        rentedBooks: [...state.rentedBooks, payload],
        availableBooks: state.availableBooks.filter(book => book.id !== payload.id),
      };
    case RENT_BOOK_FAILURE:
      return {...state, error: payload};
    case RETURN_BOOK_REQUEST:
      return {...state, pending: true};
    case RETURN_BOOK_SUCCESS:
      return {
        ...state,
        pending: false,
        rentedBooks: state.rentedBooks.filter(book => book.id !== payload.id),
        availableBooks: [...state.availableBooks, payload]
      };
    case RETURN_BOOK_FAILURE:
      return {...state, error: payload};
    default:
      return state
  }
};