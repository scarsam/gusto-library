import {
  BOOK_SEARCH_REQUEST,
  BOOK_SEARCH_SUCCESS,
  BOOK_SEARCH_UPDATE,
  BOOK_SEARCH_RESET,
  ADD_BOOK_FAILURE,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_REQUEST
} from "../constants";

let initialState = {
  pending: false,
  searchResults: [],
  searchQuery: '',
  error: null,
};

export const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BOOK_SEARCH_REQUEST:
      return {...state, pending: true};
    case BOOK_SEARCH_SUCCESS:
      return {...state, pending: false, searchResults: payload};
    case BOOK_SEARCH_UPDATE:
      return {...state, pending: false, searchQuery: payload};
    case BOOK_SEARCH_RESET:
      return {...state, pending: false, searchResults: [], searchQuery: ''};
    case ADD_BOOK_REQUEST:
      return {...state, pending: true};
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        pending: false,
        searchResults: state.searchResults.filter(searchresult => {
          return searchresult['volumeInfo'].title !== payload['volumeInfo'].title
        })};
    case ADD_BOOK_FAILURE:
      return {...state, error: payload};
    default:
      return state
  }
};