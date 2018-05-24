import {post} from './base';
import {get} from './base';
let config = {
  headers: {
      'Content-Type': 'multipart/form-data'
  }
}
export function login (url, params) {
	return new Promise((resolve, reject) => {
    post(url, params).then(res => {
      if(0 === res.status) {
        typeof resolve === 'function' && resolve(res);
      } else if (10 === res.status) {
        _doLogin();
      } else {
        reject(res.data.msg);
      }
    }).catch(err => {
      reject(err.statusText);
    })
  })
}

export function userList (url, params) {
  return new Promise((resolve, reject) => {
    get(url, params).then(res => {
      console.log(res);
    }).catch(err => {
      reject(err.statusText);
    })
  })
}

function _doLogin () {
  window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
}