import axios from 'axios';

export const API = axios.create({
  headers: {
    "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
    'X-Requested-With': 'XMLHttpRequest',
    "Access-Control-Allow-Origin": "*",
  },
});

// Set sessionStorage on each request
API.interceptors.request.use(config => {
  if (sessionStorage.getItem('jwt')) {
    config.headers.Authorization = sessionStorage.getItem('jwt')
  }
  return config
}, error => {
  return Promise.reject(error);
});
