var removeOuterParentheses = function(S) {
  let strArr = S.split("")
  let rtArr = []
  let A = primitive(strArr, rtArr)
  let res = ""
  for (let item of A) {
    res += item.slice(1, item.length - 1).join("")
  }
  return res
}

function primitive(temp, rtArr) {
  let stack = []
  let rs = null

  if (temp.length === 0) return
  if (stack.length === 0 && temp[0] !== ")") {
    stack.push(temp[0])
  }
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] === ")") {
      stack.pop()
      if (stack.length <= 0) {
        stack.push(temp[i])
        rs = temp.splice(0, i + 1)
        rtArr.push(rs)
        primitive(temp, rtArr)
        return rtArr
      }
    } else {
      stack.push(temp[i])
    }
  }
}
let str = "(()())(())(()(()))"
console.log(removeOuterParentheses(str))
