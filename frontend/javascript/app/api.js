import axios from 'axios';

export const API = axios.create({
  headers: {
    "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
    'Authorization': token ? `${sessionStorage.jwt}` : '',
  },
});