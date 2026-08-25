/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let count = m + n
    let right1 = m - 1
    let right2 = n - 1
    while(count > 0){
        if(n===0) break
        if(right1 < 0 || m === 0){
            nums1[count-1] = nums2[right2]
            count--
            right2--
        }
        else if(right2 < 0){
            nums1[count-1] = nums1[right1]
            count--
            right1--
        }
        else if(nums1[right1] > nums2[right2]){
            nums1[count - 1] = nums1[right1]
            count--
            right1--
        }
        else{
            nums1[count-1] = nums2[right2]
            count--
            right2--
        }
    }
};