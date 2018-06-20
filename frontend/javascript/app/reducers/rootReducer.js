import { combineReducers } from 'redux'
import { sessionReducer } from "./sessionReducer";
import { userReducer } from "./userReducer";
import { bookFormReducer } from "./bookFormReducer";

export const rootReducer = combineReducers({
  sessionReducer,
  userReducer,
  bookFormReducer
});