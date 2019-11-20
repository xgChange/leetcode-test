var MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.empty()) return false
  if (this.stack1.length !== 0 && this.stack2.length === 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  } else if (this.stack2.length !== 0) return this.stack2.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.empty()) return false
  return this.stack1.length === 0 ? this.stack2[0] : this.stack1[0]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0 ? true : false
}
let queue = new MyQueue()

queue.push(1)
queue.push(2)
queue.peek() // 返回 1
queue.pop() // 返回 1
queue.empty() // 返回 false
