var removeDuplicates = function(S) {
  let stack = []
  let strArr = S.split("")
  strArr.forEach(item => {
    if (stack[stack.length - 1] === item) {
      stack.pop()
    } else {
      stack.push(item)
    }
  })
  return stack.join("")
}

let str = "abbaca"
console.log(removeDuplicates(str))
