import { combineReducers } from 'redux'
import { nameReducer } from './test'

export const rootReducer = combineReducers({
  person: nameReducer
});