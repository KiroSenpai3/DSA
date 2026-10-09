class Solution(object):
    def moveZeroes(self, nums):
        right = 0
        for left in range(len(nums)):
            if right >= len(nums):
                break
            elif nums[left] == 0:
                while right < len(nums) and nums[right] == 0:
                    right = right + 1
                if right < len(nums):
                    nums[left] , nums[right] = nums[right] , nums[left]
            right = right + 1