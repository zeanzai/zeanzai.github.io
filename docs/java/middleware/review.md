
## Problem Description

Write a function to crush candy in a one dimensional board.

In candy crushing games, groups of like items are removed from the board.  In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered adjacent to each other.  This process should be repeated as many times as possible.

```java

1 ABBBBBCC  -> ACC
2 ABCCCBB -> A
3 ABCCCBBAAC -> C



ABBBBBCC

// 
arr[]
stack1, stack2

// arr -> stack1 : ABCCCBB  
// stack1:pop -> stack2 
//  判断 func(stack2)

// stack2 最上三个元素判断，如果相等，就删除 func(stack2)
public Stack func(Stack<Char> stackO){
    char one, two, three; // 最上面三个
    one = stack.pop();
    two = stack.pop();
    three = stack.pop();

    if(one == two && two == three){
        return stackO;
    }
    stackO.push(three).push(two).push(one);
    return stackO;

}



for(){


}
```