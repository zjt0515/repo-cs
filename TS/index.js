"use strict";
// tsc --init
// tsc -w 编译为js文件，然后node运行js
// npm i ts-node -g
// npm init -y
// tsc -w 编译为js npm i @types/node -D
// ts-node index.ts 直接调试
let myName = 'zjt';
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
 * 1, 'str', false
 */
/**
 * never
 */
