/**
  1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
  2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
  3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
  4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移
  
  输入: ["5","2","C","D","+"]
  输出: 30
  解释: 
  第1轮：你可以得到5分。总和是：5。
  第2轮：你可以得到2分。总和是：7。
  操作1：第2轮的数据无效。总和是：5。
  第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
  第4轮：你可以得到5 + 10 = 15分。总数是：30。

 */
var calPoints = function(ops) {
  let tempAry = ops
  let stack = []
  while (tempAry.length > 0) {
    let first = tempAry.shift()
    if (first === "C") {
      stack.pop()
    } else if (first === "D") {
      let double = parseInt(stack[stack.length - 1]) * 2
      stack.push(double)
    } else if (first === "+") {
      let count =
        parseInt(stack[stack.length - 1]) + parseInt(stack[stack.length - 2])
      stack.push(count)
    } else {
      stack.push(parseInt(first))
    }
  }
  return stack.reduce((pre, next) => {
    return pre + next
  })
}

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))
