class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        ans = []
        for num in nums:
            b = 0
            for a in nums:
                if num > a:
                    b = b + 1
            ans.append(b)
        return ans