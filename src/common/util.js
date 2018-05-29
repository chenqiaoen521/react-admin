//获取url参数
export function getUrlParam(name){
  let queryString = window.location.search.split('?')[1] || '';
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let result = queryString.match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}
// 错误提示
export function errorTips(errMsg) {
	alert(errMsg)
}

// 成功提示
export function successTips(msg) {
	alert(msg)
}
