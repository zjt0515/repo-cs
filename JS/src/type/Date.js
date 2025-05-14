// * =================== Section: Date ===================

{
  let now = new Date();
  let date1 = new Date(2025, 0, 1, 6, 0, 0, 0);
  let date2 = new Date('2025-5-13');
  console.log(now); // 2025-05-13T01:53:43.425Z

  console.log(now.getFullYear());
  console.log(now.getMonth() + 1); // 0-11
  console.log(now.getDate());
  console.log(now.getHours());
  console.log(now.getMinutes());
  console.log(now.getSeconds());
  console.log(now.getMilliseconds());

  // * 自 1970-01-01 00:00:00 以来经过的毫秒数，该整数被称为 时间戳。
  console.log(new Date(0));

  // 通过时间戳 测量事时间间隔
  console.log(Date.now());

  let start = Date.now();
  setTimeout(() => {
    let end = Date.now();
    console.log(`过去了${end - start}ms`);
  }, 5000);
}

// * =================== Section: 日期计算 ===================
const furture = new Date(2026, 0, 1);
// 将Date转换为number, 即时间戳
console.log(+furture);
console.log(Number(furture));

function calcDaysPassed(date1, date2) {
  return Math.abs(date1 - date2) / 1000 / 60 / 60 / 24;
}

const date1 = new Date(2024, 3, 14);
const date2 = new Date(2024, 3, 15);
console.log(calcDaysPassed(date1, date2));
