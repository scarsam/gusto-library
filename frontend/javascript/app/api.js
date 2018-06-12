import axios from 'axios';
// AUTH_TOKEN = sessionStorage.jwt || '';

export const API = axios.create({
  headers: {
    "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
    'Authorization': `${sessionStorage.jwt}` || '',
  },
});