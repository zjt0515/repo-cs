const util = require("util");
function Vechile(brandName, price) {
  console.log("this: ", this);
  this.brandName = brandName;
  this.price = price;
}
Vechile.prototype.sale = function () {
  console.log(this + "销售了");
};
/**
 * 组合继承
 * @param {*} brandName
 * @param {*} price
 * @param {*} seats
 */
function Bus(brandName, price, seats) {
  // 借用构造函数继承
  Vechile.call(this, brandName, price);
  this.seats = seats;
}
console.log(
  "默认的Bus类属性prototype: " +
    "\n" +
    util.inspect(Bus.prototype, { showHidden: true, depth: null })
);
console.log("默认prototype对象的constructor属性指向函数本身: ");
console.log(Bus.prototype.constructor === Bus);
// 原型链继承
Bus.prototype = new Vechile();
Bus.prototype.constructor = Bus;
console.log(
  "赋值后的Bus类属性prototype: " +
    "\n" +
    util.inspect(Bus.prototype, { showHidden: true, depth: null })
);

let bus = new Bus("大把", 20, 64);
