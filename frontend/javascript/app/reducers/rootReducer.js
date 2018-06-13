import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'
import { sessionFormReducer } from './sessionFormReducer'
import { sessionReducer} from "./sessionReducer";

export const rootReducer = combineReducers({
  signUpReducer,
  sessionFormReducer,
  sessionReducer
});