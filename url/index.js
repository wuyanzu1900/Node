function getQueryString(urlStr) { // 查询对象
    var obj = new Object();
    if (urlStr.indexOf("?") != -1) { // 查询参数部分
      var queryStr = urlString.split('?')[1];
      if (urlStr.indexOf("#") != -1) {
        // 前端如果也有node 那样的url 模块就好了， 
        queryStr = queryStr.split('#')[0];
      }
      // console.log(queryStr);
      var strs = queryStr.split("&");
      // console.log(strs);
      for (var i = 0; i < strs.length; i++) {
        obj[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }
    return obj;
  }
// console.log(getQueryString(urlString));