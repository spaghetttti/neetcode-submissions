class Solution:
    def maxArea(self, heights: List[int]) -> int:
    #  formula for areas beetween heights : area = Math.min(hights[i], hights[j]) * (j - i) , where j > i 
    #  brute force O(n^2):
        most = 0
        n = len(heights)
        for i in range(n):
            for j in range(i + 1, n):
                h1 = heights[i]
                h2 = heights[j]
                # print(f'left column at {i} with height of {h1}')
                # print(f'right column at {j} with height of {h2}')
                area = min(h1, h2) * (j - i)
                # print(f'area {area}')
                most = max(most, area)
                # print(f'most {most}') 

        return most