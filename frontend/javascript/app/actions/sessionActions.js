import { LOG_OUT_USER } from "../constants";
import history from '../history'

export const logOutUser = () => {
  sessionStorage.removeItem('jwt');
  history.push('/signup');
  return {type: LOG_OUT_USER};
};