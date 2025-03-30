/**
 * 接口：定义对象类型的类型
 * 定义接口
 * 接口命名：P 
 */
interface Point {
    // 只读属性
    readonly id: number
    x:number
    y:number

}
declare const MyPoint: Point
// 重名接口合并
interface Point {
    // 函数属性
    shake?(): void
    name? : string
    [propName: string]: any
    // 可选属性
    color?: string
}
/**
 * 接口继承接口，继承其他接口的属性
 */
interface shaped {
    shape: {}
}
interface Point extends shaped {

}
/**
 * 创建对象
 */
const p1:Point = {
    id: 0,
    x:1,
    y:2,
    name: 'p1',
    shape: {}
}
/**
 * class implements interface
 */
class PointNode implements Point{
    id:number
    x:number
    y:number
    shape: {}
    constructor(id:number,x:number,y:number){
        this.id = id
        this.x = x
        this.y = y
        this.shape = {}
    }
}
/**
 * 类实现接口
 */
interface List {
    add(): void
    remove(): void
}
class ArrayList implements List {
    add(): void {
        throw new Error("Method not implemented.")
    }
    remove(): void {
        throw new Error("Method not implemented.")
    }
}
class LinkedList implements List {
    add(): void {
        throw new Error("Method not implemented.")
    }
    remove(): void {
        throw new Error("Method not implemented.")
    }
}