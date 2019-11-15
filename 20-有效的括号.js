/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  示例 2:
  输入: "()[]{}"
  输出: true
 *  
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  if (s.length === 0) return true
  let stack = []
  let map = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"]
  ])
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i])
    } else {
      if (stack.length === 0) return false
      if (s[i] === map.get(stack[stack.length - 1])) {
        stack.pop()
        if (stack.length === 0) {
          return true
        }
      } else {
        return false
      }
    }
  }
  if (stack.length > 0) {
    return false
  }
}
console.log(isValid("()((()))"))
