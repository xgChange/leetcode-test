var nextGreaterElement = function(nums1, nums2) {
  if (!isChild(nums1, nums2)) return false
  let temp = []
  let index = null
  for (let i = 0; i < nums1.length; i++) {
    // 子
    for (let j = 0; j < nums2.length; j++) {
      // 父
      index = nums1[i] === nums2[j] ? j + 1 : null
      if (index) {
        while (nums1[i] >= nums2[index]) {
          index++
        }
        if (nums1[i] < nums2[index]) {
          // 找到右边最大的
          temp.push(nums2[index])
          break
        } else {
          temp.push(-1)
          break
        }
      }
    }
  }
  return temp
  function isChild(n1, n2) {
    if (n1.length > n2.length) return false
    n1.forEach(item => {
      if (!n2.includes(item)) return false
    })
    return true
  }
}
let nums1 = [1, 3, 5, 2, 4],
  nums2 = [6, 5, 4, 3, 2, 1, 7]

console.log(nextGreaterElement(nums1, nums2))
