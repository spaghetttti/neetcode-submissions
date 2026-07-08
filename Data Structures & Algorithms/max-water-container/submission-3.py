class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # area = min(heights[i], heights[j]) * j - i, where i, j are  0 < i < j < len(heights)
        # solution for O(n^2) we know just double loops 
        # move one pointer (wall) at the time
        left = 0
        n = len(heights)
        right = n - 1

        max_area = 0
        
        while (left < right):
            area = min(heights[left], heights[right]) * (right - left)
            print(f"area : {area}, left: {left}, right: {right}, dis: {right - left}")
            max_area = max(max_area, area)

            if (heights[left] < heights[right]):
                left += 1
            else: 
                right -= 1
        

        return max_area