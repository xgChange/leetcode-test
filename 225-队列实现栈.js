/**
 *使用队列实现栈的下列操作：
  push(x) -- 元素 x 入栈
  pop() -- 移除栈顶元素
  top() -- 获取栈顶元素
  empty() -- 返回栈是否为空

 */
var MyStack = function() {
  this.queue1 = []
  this.queue2 = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
/**
 * 
  MyStack.prototype.pop = function() {  // 循环队列实现栈
    if (this.empty()) return false
    let index = this.queue1.length - 1
    while (index) {
      this.queue1.push(this.queue1.shift())
      index-- 
    }
    let rt = this.queue1.shift()
    return rt
  }
 */
MyStack.prototype.pop = function() {
  if (this.empty()) return false
  while (this.queue1.length !== 1) {
    this.queue2.push(this.queue1.shift())
  }
  let rt = this.queue1.shift()
  while (this.queue2.length) {
    this.queue1.push(this.queue2.shift())
  }
  return rt
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.empty()) return false
  return this.queue1.length === 0
    ? this.queue2[this.queue2.length - 1]
    : this.queue1[this.queue1.length - 1]
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue1.length === 0 && this.queue2.length === 0 ? true : false
}

let mystack = new MyStack()
mystack.push(1)
mystack.push(2)
mystack.push(3)
mystack.pop()
console.log(mystack)
mystack.push(4)
console.log(mystack)

mystack.pop()
console.log(mystack)

mystack.push(5)
mystack.push(6)
console.log(mystack)

console.log(mystack.top())
// ["MyStack","push","push","top","pop","empty"]
// [[],[1],[2],[],[],[]]
