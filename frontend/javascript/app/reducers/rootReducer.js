import { combineReducers } from 'redux'
import { signUpReducer } from './signUpReducer'

export const rootReducer = combineReducers({
  signUpReducer,
});