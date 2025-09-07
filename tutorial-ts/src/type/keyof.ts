// * =================== Section: keyof ===================
/**
 * keyof获取接口属性
 */
interface MyProduct2 {
  name: string
  price: number
  account: number
  buy(): string
}
// keyof跟类型，typeof跟变量
type PKeys = keyof MyProduct2
// 等同于：
type PKeys2 = 'name' | 'price' | 'account' | 'buy'

/**
 *
 */
type AllKeys<T> = T extends any ? T : never
type Pkeys3 = AllKeys<keyof MyProduct2>

let pKeys: PKeys = 'buy'

/**
 * keyof获取类属性
 */
class Student {
  name: string
  score: number = 0
  static count = 0
  constructor(name: string) {
    this.name = name
    Student.count++
  }
}
type StudentProps = keyof Student
let test1: StudentProps = 'name'
let test2: StudentProps = 'score'
// let test3:StudentProps =  "price"
// let test4:StudentProps =  "count"

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
