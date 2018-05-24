import {post} from './base';
export function login (url, params) {
	return new Promise((resolve, reject) => {
    post(url, params).then(res => {
      console.log(res);
      if(0 === res.status) {
        typeof resolve === 'function' && resolve(res);
      } else if (10 === res.status) {
        // _doLogin();
      } else {
        reject(res.msg);
      }
    }).catch(err => {
      console.log(err);
      reject(err.statusText);
    })
  })
}

function _doLogin () {
  window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
}