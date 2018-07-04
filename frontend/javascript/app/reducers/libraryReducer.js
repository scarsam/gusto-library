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
  RENTED_BOOKS_REQUEST,
  RENTED_BOOKS_SUCCESS,
  RENTED_BOOKS_FAILURE,
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
      return {...state, pending: false, availableBooks: payload};
    case LIBRARY_BOOKS_FAILURE:
      return {...state, pending: false, error: payload};
    case RENTED_BOOKS_REQUEST:
      return {...state, pending: true};
    //  COMMENT FOR THIS
    //  COMMENT FOR THIS
    //  COMMENT FOR THIS
    //  COMMENT FOR THIS
    case RENTED_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false,
        rentedBooks: state.availableBooks.filter(book => {
          return payload.find(rentedBook => rentedBook.book_id === book.id)
        }).reduce((acc, current) => {
          let rentedBook = payload.find(rentedBook => rentedBook.book_id === current.id);
          let mergedBook = Object.assign({rented_user: rentedBook.user_id}, current);
          return [...acc, mergedBook]
        }, []),
        availableBooks: state.availableBooks.filter(book => {
          return payload.every(rentedBook => rentedBook.book_id !== book.id);
        }),
      };
    case RENTED_BOOKS_FAILURE:
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
      let book = state.availableBooks.find(book => book.id === payload.book_id);
      let mergedBook = Object.assign({rented_user: payload.user_id}, book);
      return {
        ...state,
        pending: false,
        rentedBooks: [...state.rentedBooks, mergedBook],
        availableBooks: state.availableBooks.filter(book => book.id !== payload.book_id),
      };
    case RENT_BOOK_FAILURE:
      return {...state, error: payload};
    default:
      return state
  }
};