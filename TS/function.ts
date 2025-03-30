// 参数、返回值定义，以及默认值、可选参数
function add(a:number, b:number = 0):number{
    return a+b
}
const minus = (a:number , b?:number):number => a-b

const multi: (a:number,b:number) => number = 
function (a:number, b:number) 
{
    return a+b
}


interface ReturnNumberFn {
    ():number
}
function fn:ReturnNumber(){

}

