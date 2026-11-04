class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        stack = []
        greater_element = {}

        for num in nums2:
            while stack and num > stack[-1]:
                small = stack.pop()
                greater_element[small] = num
 
            stack.append(num)

        for num in stack:
            greater_element[num] = -1

        ans = []
        for num in nums1:
            ans.append(greater_element[num])

        return ans