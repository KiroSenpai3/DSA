class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        output = []
        x = max(candies)
        for num in candies:
            if (num + extraCandies) >= x:
                output.append(True)
            else:
                output.append(False)
        return output