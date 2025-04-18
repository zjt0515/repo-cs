"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  // es5 方式参数默认值
  // numPassengers = numPassengers || 1;
  // price = price || 100;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
// 没有传递的参数，默认为undefined
createBooking("LH123");
createBooking("LH123", 2);
createBooking("LH123", 2, 200);
createBooking("LH123", undefined, 1000);

/**
 * 参数传递
 * 原始类型传递值
 * 引用类型传递引用的地址值
 */
const flight = "1";
const Jin = {
  name: "jin",
  passport: 123,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "2";
  passenger.name = "Mr" + passenger.name;
  if (passenger.passport === 123) {
    alert("check in");
  } else {
    alert("wrong passport");
  }
};
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1e9);
};
checkIn(flight, Jin);
console.log(flight);
console.log(Jin);

/**
 * 函数对象的方法
 */
function sum(num1, num2) {
  return num1 + num2;
}

function callSum(num1, num2) {
  return sum.call();
}

// 函数可以捕获函数体外部变量
let z = 1;
function addToZ(a) {
  return a + z;
}
