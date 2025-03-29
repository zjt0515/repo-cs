/**
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
    name : string
    [propName: string]: any
    // 可选属性
    color?: string
}
/**
 * 接口继承，和重名的效果一致
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
    constructor(id:number,x:number,y:number){
        this.id = id
        this.x = x
        this.y = y
    }
}
