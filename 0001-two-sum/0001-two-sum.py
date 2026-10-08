class Solution(object):
    def twoSum(self, nums, target):
        d = dict()
        for a in range(len(nums)):
            if((target - nums[a]) in d):
                return [d.get(target - nums[a]), a]
            else:
                d[nums[a]] = a