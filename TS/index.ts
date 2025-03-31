// tsc --init
// tsc -w 编译为js文件，然后node运行js
// npm i ts-node -g
// npm init -y
// tsc -w 编译为js npm i @types/node -D
// ts-node index.ts 直接调试
let myName: string = 'zjt'
new Set<string>()
console.log(myName)
// number
let binary: number = 0b1001;
let octal: number = 0o277;
let decimal: number = 123
let hex:number = 0xaabbcc;
let inf:number = Infinity;
// boolean
let bool: boolean = true
// array
let list: number[] = [1,2,3]
let list2: Array<number> = [1, 2]
// void, null, undefined
let n:void = null

/**
 * 顶级类型 any, unknown更安全
 * 不确定一个类型，优先使用unknown
 * unknown不能赋给除了unknown和自身的变量
 * unkown不能访问自身的方法和属性
 */  
let a:unknown = {name:'a'};
let b:any = a
let c:unknown = a
// let d:Number = a
// a.name


/**
 * Object类型，{}
 */
let O : Object = 'str'
let O2: {} = 'str'
let O3: {} = {name:'zjt'}

/**
 * object类型
 * 可以赋值引用类型，不能是基本类型
 */
let o: object = [1,2,3]

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
type DataFlow = string | number 
function useDataFlow(dataFlow: DataFlow) {
  if(typeof dataFlow === "string" ) {
    dataFlow.length
  } else if(typeof dataFlow === "number") {
    dataFlow.toFixed(2)
  } else {
    // never类型，暂时不可能到达的地方
    // 如果未来新增了数据类型，这里就是预留的区域
    let data = dataFlow
  }
}

/**
 * 合成类型
 */

// 联合类型
let StrOrNum: string | number = 'str'
StrOrNum = 1
console.log(StrOrNum) 
// 交叉类型
let obj: {username:string} & {age:number} = { username: 'zjt', age: 18 } 
console.log(obj)   

/**
 * 字面量数据类型
 */
type A = 1 | 2 | 3 | 4 | 5
let num: A = 2