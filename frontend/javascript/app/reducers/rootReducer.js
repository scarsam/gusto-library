import {combineReducers} from 'redux'
import {sessionReducer} from './sessionReducer';
import {userReducer} from './userReducer';
import {searchReducer} from './searchReducer';
import {libraryReducer} from './libraryReducer';
import {notificationReducer} from './notificationReducer';

export const rootReducer = combineReducers({
  sessionReducer,
  userReducer,
  searchReducer,
  libraryReducer,
  notificationReducer,
});