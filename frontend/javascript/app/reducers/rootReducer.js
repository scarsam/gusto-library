import { combineReducers } from 'redux'
import { sessionFormReducer } from './sessionFormReducer'
import { sessionReducer} from "./sessionReducer";

export const rootReducer = combineReducers({
  sessionFormReducer,
  sessionReducer
});