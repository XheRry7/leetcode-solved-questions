/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const mergedArray = [];
  for (let i = 0; i < m; i++) {
    mergedArray.push(nums1[i]);
  }

  for (let i = 0; i < n; i++) {
    mergedArray.push(nums2[i]);
  }
  for (let i = 0; i < m + n; i++) {
    if (mergedArray[i]) {
      nums1[i] = mergedArray[i];
    }
  }
  nums1.sort((a, b) => a - b);
};
