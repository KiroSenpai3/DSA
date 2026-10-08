class Solution(object):
    def findNumbers(self, nums):
        ans = 0
        for num in nums:
            a = 0
            while num != 0:
                num = num // 10
                a = a + 1
            if (a%2) == 0:
                ans = ans + 1
        return ans

        