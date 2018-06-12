import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'
import { signUpFormReducer } from './signUpFormReducer'

export const rootReducer = combineReducers({
  signUpReducer,
  signUpFormReducer
});