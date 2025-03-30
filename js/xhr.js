let xhr = new XMLHttpRequest();

xhr.open("get", "example.php", false);
xhr.send(null);
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  // 响应体
  alert(xhr.responseText);
} else {
  alert(xhr.status);
}

//readyState

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      alert(xhr.responseText);
    } else {
      alert(xhr.status);
    }
  }         ,
};

/**
 * post请求
 */
let xhrPost = new XMLHttpRequest();
xhr.open("post", "", true);
xhr.setRequestHeader("Content-Type", "");

// 取消异步请求
