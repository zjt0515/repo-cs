/**
 * 默认泛型为any
 */
class MyArrayList<T=any> {
    array: Array<T>
    index: number = 0
    constructor(){
        this.array = []
    }
    /**
     * 增
     * @param data 
     */
    add(data: T){
        this.array[this.index++] = data
    }
    /**
     * 通过索引取值
     * @param data 
     */
    get(index: number){
        return this.array[index]
    }
}