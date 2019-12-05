/**
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，
 * 并返回结果。 # 代表退格字符。
 *  输入：S = "ab#c", T = "ad#c"
    输出：true
    解释：S 和 T 都会变成 “ac”。
 */
var backspaceCompare = function(S, T) {
  let s1 = S.split("")
  let t1 = T.split("")
  let rt1 = pushStack(s1)
  let rt2 = pushStack(t1)
  return rt1 === rt2
}

function pushStack(arr) {
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] === "#") {
      stack.pop()
      arr.splice(i, 1)
    }
    stack.push(arr[i])
  }
  return stack.toString()
}

let S = "ab##",
  T = "c#d#"
console.log(backspaceCompare(S, T))
