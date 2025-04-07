// 构造promise
let promise = new Promise(function (resolve, reject) {
  // executor函数 生产者代码   // Promise被创建后自动运行
  // 执行一项工作
  // 任务完成，执行resolve(value)
  setTimeout(() => resolve("done"), 1000);
  // 出现error，执行reject(error)
  // setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// 消费者代码
promise
  .then(
    function (result) {
      console.log(`result:${result}`);
    },
    function (error) {
      `error:${error}`;
    }
  )
  .finally(function () {
    console.log("清理");
  });

/**
 * consume a promise
 */
// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      // 再次消费返回的 包含数据的promise对象
      // 处理data
      console.log(data);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    });
};

getCountryData("portugal");

/**
 * 一个promise例子
 */
const isPregnant = true;
// const isPregnant = false;
const promise1 = new Promise((resolve, reject) => {
  if (isPregnant) {
    resolve(`孩子爹`);
  } else {
    reject(`老公`);
  }
});

promise
  .then((name) => {
    console.log(`男人成为了${name}`);
  })
  .catch((name) => {
    console.log(`男人成为了${name}`);
  })
  .finally(() => {
    console.log(`最终`);
  });
