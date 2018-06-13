import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'
import { signUpFormReducer } from './signUpFormReducer'
import { sessionReducer} from "./sessionReducer";

export const rootReducer = combineReducers({
  signUpReducer,
  signUpFormReducer,
  sessionReducer
});