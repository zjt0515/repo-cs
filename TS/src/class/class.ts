import { count } from "console"

class People {
    // 
    name:string
    _age:number = 0
    addr?:string
    // 静态属性
    static count:number = 0
    constructor(_name: string, _age: number, _addr?:string) {
        this.name = _name
        this.addr = _addr
        People.count++
    }

    set age(val:number){
        if(val >= 0 && val <= 150){
            this._age = val
        }
        else {
            throw new Error('年龄不在范围内')
        }
    }
    get age(){
        return this._age
    }
    // 会保存在原型对象中
    doEat(){
        console.log("eating")
    }
    // 静态方法：工具类
    static Check(){}
}
let p = new People("zjt",13)