// 创建请求
let request = new XMLHttpRequest()

console.log(request.readyState)

request.open('get', 'example.php', true)

// 设置请求头
request.setRequestHeader('Content-Type', 'text/plain')

// 发送，可以指定body
request.send(null)
if ((request.status >= 200 && request.status < 300) || request.status == 304) {
  // 响应体
  alert(request.responseText)
} else {
  alert(request.status)
}

//readyState

request.onreadystatechange = function () {
  if (request.readyState == 4) {
    if ((request.status >= 200 && request.status < 300) || request.status == 304) {
      alert(request.responseText)
    } else {
      alert(request.status)
    }
  }
}

/**
 * post请求
 */
let requestPost = new XMLHttpRequest()
request.open('post', '', true)
request.setRequestHeader('Content-Type', '')

// 取消异步请求
