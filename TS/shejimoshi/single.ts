class DateUtil {
    // 立即创建单例
    static dateUtil = new DateUtil()
    private constructor() {
        
    }
    formatDate(){}
}
/**
 * 通过调用静态方法来生成(返回)单例
 */
class DateUtil2 {
    // s
    static dateUtil:DateUtil2
    private constructor() {
        
    }
    static getInstance(){
        if(this.dateUtil === null){
            this.dateUtil = new DateUtil2()
        }
        return this.dateUtil
    }
}