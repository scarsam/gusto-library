import axios from 'axios';

export const API = axios.create({
  headers: {
    "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
    'X-Requested-With': 'XMLHttpRequest',
    "Access-Control-Allow-Origin": "*"
    // 'Authorization': `${sessionStorage.jwt}` || '',
  },
});