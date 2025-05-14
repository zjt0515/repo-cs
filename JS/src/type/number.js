console.log(23 === 23.0);
console.log(0.1 + 0.2 === 0.3);

// Conversion
// string to number
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('23'));
console.log(Number.parseInt('23px '));
console.log(Number.parseInt('e23')); // NaN
console.log(Number.parseFloat('e23')); // NaN

// console.log(parseFloat(' 2.5rem'))

// Check if is NaN
Number.isNaN(20);
Number.isNaN('20');
Number.isNaN(+'20X'); // true
Number.isNaN(23 / 0); // Infinite

// Check if is a number
Number.isFinite(20);

// Check if is a Integer
Number.isInteger;

// * =================== Section: 进制 ===================
{
  let num = 65535;
  console.log(num.toString(3));
  console.log(num.toString(2));
}

// * =================== Section: Math方法 ===================
// max, min
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(1, 2, 3, 4));

// n的power次幂
console.log(Math.pow(2, 16), Math.pow(2, 32));

// 向下取整
console.log(Math.floor(3.5));
// 向上取整
console.log(Math.ceil(3.5));
// 四舍五入
console.log(Math.round(3.4), Math.round(3.5));
// 忽略小数点后面的数
console.log(Math.trunc(3.5), Math.trunc(-3.5));

// 随机数
console.log(Math.random()); // [0-1)
// a-b之间的随机数
function random(min, max) {
  let num1 = Math.random() * (max - min + 1); // [1, max-min + 1)
  let num2 = min + num1; //[min + 1, max + 1)
  return Math.floor(num2);
}
let res = [0, 0, 0, 0];
for (let index = 0; index < 10000000; index++) {
  let tmp = random(1, 3);
  res[tmp] += 1;
}
console.log(res);
