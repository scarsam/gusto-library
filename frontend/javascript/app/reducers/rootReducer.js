import {combineReducers} from 'redux'
import {sessionReducer} from './sessionReducer';
import {userReducer} from './userReducer';
import {searchReducer} from './searchReducer';
import {bookReducer} from './bookReducer';
import {libraryReducer} from './libraryReducer';
import {rentReducer} from './rentReducer';

export const rootReducer = combineReducers({
  sessionReducer,
  userReducer,
  searchReducer,
  bookReducer,
  libraryReducer,
  rentReducer
});