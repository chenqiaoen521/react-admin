import axios from 'axios';
let config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
export function get (url, params) {
  return axios.get(url, {params});
}
export function post (url, params) {
  return axios.post(url, params, config);
}
