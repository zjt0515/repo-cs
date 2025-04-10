type MyObj = {
  name: string
  age: number
}
type Keys = keyof MyObj


/**
 * in运算符
 * 确定对象中是否包含某个属性名
 * 
 */
const obj = {
  a:1
}
console.log('a' in obj)

// 用法2: 遍历联合类型
type Union = 'a' | 'b' | 'c'
type MyUnion = {
  [Prop in Union]: number
}

/**
 * is
 * 描述函数返回类型
 */
interface Fish {
  name: string
  swim: () => void
}
interface Bird {
  name: string
  fly: () => void
}
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
let yu: Fish = {
  name: '小鱼',
  swim: () => {}  
}
export {}