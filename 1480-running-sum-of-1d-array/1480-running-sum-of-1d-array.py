class Solution(object):
    def runningSum(self, nums):
        output = []
        sum = 0
        for num in nums:
            sum = sum + num
            output.append(sum)
        return output    