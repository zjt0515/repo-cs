"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/**
 * LOOPS
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movement){
for (const [i, movement] of movements.entries()) {
}
// 0:function(200)
// 1:function|(450)
// ...
movements.forEach(function (movement, index, array) {});

// MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {});
// SET
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "CNY"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`key:${key}`);
});

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

// SLICE切片 提取数组的任意部分
// slice(start?: number, end?: number)
// 不改变原数组
// slice(-x) 从末尾开始提取x个元素

console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-2)); // [ 'd', 'e' ]
console.log(arr.slice(1, -1)); // [ 'b', 'c', 'd' ] 从1开始提取，直到末尾2个
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e' ] 无参
console.log([...arr]); // 可以创建浅拷贝的类似方法

// SPLICE拼接
// splice(start: number, deleteCount?: number)
// 返回被删除的元素
// 改变原数组, 可以用来删除元素
// console.log(arr.splice(1, 2)) // 从1开始删除2个
console.log(arr.splice(1)); // 从1开始删除，直到结束
// console.log(arr.splice(-1)) // 删除最后一个元素
console.log(arr.splice(1, 0, "2", "3"));

// REVERSE
// 改变原数组
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT连接
// 不改变原数组
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // 另一种方法

// JOIN 利用分隔符将元素连接为string
console.log(letters.join(" - "));

// AT，可以使用负数索引
arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
console.log(arr.slice(-1)[0]);
