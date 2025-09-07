"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var a = 1;
var b = function b() {
  console.log('b');
};
var arr = [1, 2, 3, 4, 5];
var item1 = arr[0],
  item2 = arr[1];
var obj = {
  c: 1,
  d: 2
};
var c = obj.c,
  d = obj.d;
// promise
new Promise(function (resolve, reject) {
  resolve('');
});