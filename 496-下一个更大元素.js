/**
给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。
nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
*/

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
