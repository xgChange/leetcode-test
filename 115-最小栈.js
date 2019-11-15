/**
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
    push(x) -- 将元素 x 推入栈中。
    pop() -- 删除栈顶的元素。
    top() -- 获取栈顶元素。
    getMin() -- 检索栈中的最小元素。
    示例:

    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.getMin();   --> 返回 -2.
    
  */

/**
 * 使用了一个辅助栈，专门用来存放最小值的栈
 */
var MinStack = function() {
  this.stack = []
  this.help = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.help.length === 0 || x <= this.getMin()) {
    this.help.push(x)
  }
  this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.getMin()) {
    this.help.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.help[this.help.length - 1]
}

var minStack = new MinStack()
minStack.push(-6)
minStack.push(0)
minStack.push(-3)
minStack.push(-3)
minStack.push(-6)
console.log(minStack.getMin())
minStack.pop()
console.log(minStack.top())
// minStack.getMin();
console.log(minStack.getMin())
