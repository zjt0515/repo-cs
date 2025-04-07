"use strict";
// tsc --init
// tsc -w 编译为js文件，然后node运行js
// npm i ts-node -g
// npm init -y
// tsc -w 编译为js npm i @types/node -D
// ts-node index.ts 直接调试
/**
 * 基本类型
 */
let myName = 'zjt';
new Set();
console.log(myName);
// number
let binary = 0b1001;
let octal = 0o277;
let decimal = 123;
let hex = 0xaabbcc;
let inf = Infinity;
// boolean
let bool = true;
// array
let list = [1, 2, 3];
let list2 = [1, 2];
// void, null, undefined
let n = null;
// undefined
let canEqualUndefined1 = undefined;
let canEqualUndefined2 = undefined;
let canEqualUndefined3 = undefined;
// null
let canEqualNull1 = null;
let canEqualNull2 = null;
let canEqualNull3 = null;
/**
 * 顶级类型 any, unknown更安全
 * 不确定一个类型，优先使用unknown
 * unknown不能赋给除了unknown和自身的变量
 * unkown不能访问自身的方法和属性
 */
let a = { name: 'a' };
let b = a;
let c = a;
// let d:Number = a
// a.name
/**
 * Object类型，{}
 */
let O = 'str';
let O2 = 'str';
let O3 = { name: 'zjt' };
/**
 * object类型
 * 可以赋值引用类型，不能是基本类型
 */
let o = [1, 2, 3];
/**
 * Number String
 */
/**
 * number string
 */
/**
 * 特殊类型
 */
// tuple
console.log("=========tuple=========");
let salary = ["zjt", 10000, 5000, 15000];
// 可变tuple
let salary2 = ["zjt", 1, 1, 1, 1, 1, 1, 1];
// 解构
let [name3, nuber1, ...rest] = salary2;
// 元祖标签tag
console.log(salary2[0]);
let tagedTuple = ["zjt", 111, 222];
function useDataFlow(dataFlow) {
    if (typeof dataFlow === "string") {
        dataFlow.length;
    }
    else if (typeof dataFlow === "number") {
        dataFlow.toFixed(2);
    }
    else {
        // never类型，暂时不可能到达的地方
        // 如果未来新增了数据类型，这里就是预留的区域
        let data = dataFlow;
    }
}
/**
 * 合成类型
 */
// 联合类型
let StrOrNum = 'str';
StrOrNum = 1;
console.log(StrOrNum);
// 交叉类型
let obj = { username: 'zjt', age: 18 };
console.log(obj);
let num = 2;
/**
 * 经典报错
 */
// 不能使用 不固定的索引值
let user = { name: 'zjt' };
// let need = 'name'
const need = 'name';
let username = user[need];
// object类型不能使用常量索引
let objtest = { name: 'zjt' };
// let username2 = objtest[need]
