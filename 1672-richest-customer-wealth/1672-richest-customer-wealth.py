class Solution(object):
    def maximumWealth(self, accounts):
        ans = 0
        for i in range(len(accounts)):
            sum = 0
            for num in accounts[i]:
                sum += num
            ans = max(ans, sum)
        return ans