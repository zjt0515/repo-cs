package structure;

/**
 * @author genshinya
 * @time 2024-11-01 19:40:47
 * @description 栈的实现
 */
public class Stack<T> {
    private T[] data;
    private int capacity;
    private int top;

    Stack(int size){
        this.capacity = size;
        this.top = -1;
    }

    /**
     * 入栈
     * @param x 入
     */
    public void push(T x){
        data[++this.top] = x;
    }

    /**
     * 出栈
     * @param x 出
     */
    public void pop(T x){
        this.top--;
    }

    /**
     * 1.检查栈不为空
     * @return 栈顶元素
     */
    public T peek(){
        if (empty()) {
            System.out.println("栈为空");
            return null;
        }
        return data[this.top];
    }

    /**
     *
     * @return 栈是否满了
     */
    public Boolean ifFull(){
        return this.top == capacity - 1;
    }

    /**
     *
     * @return 栈是非为空
     */
    public Boolean empty(){
        return this.top == -1;
    }

    /**
     *
     * @return 栈存储元素的数量
     */
    public int size(){
        return this.top + 1;
    }
}
