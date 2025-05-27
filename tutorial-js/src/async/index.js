// * =================== Section: 同步 ===================
let x = 3
x += 4
x -= 1

// * =================== Section: 认识异步 ===================
// 优化计算量大而时间长的操作
setTimeout(() => {
  console.log('inner');
}, 3000)

// * =================== Section: callback ===================
/**
 * async
 */
const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function () {
  img.classList.add('fadeIn');
});
p.style.width = '300px';

/**
 * Error优先回调风格
 * 加载脚本，运行相应的新函数
 * @param {*} src
 * @param {*} callback
 */
function loadScript(src, callback) {
  // 创建一个 <script> 标签，并将其附加到页面
  // 这将使得具有给定 src 的脚本开始加载，并在加载完成后运行
  let script = document.createElement('script');
  script.src = src;

  // onload 事件后调用新函数
  script.onload = () => callback(null, script);

  // 追踪脚本加载错误的情况
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

/**
 * 回调地狱
 */
oadScript('1.js', function (error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function (error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function (error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...加载完所有脚本后继续 (*)
          }
        });
      }
    });
  }
});


// * =================== Section: 事件驱动   ===================
// 定义事件
let loginEvent = new CustomEvent('login-over', {

})

// 监听login-over
window.addEventListener('login-over', function () {
  console.log("登录成功");
})

// 触发事件
function login() {
  setTimeout(() => {
    window.dispatchEvent(loginEvent)
  }, 3000)
}

login()

// * =================== Section: async await ===================
async function executor(params) {

}