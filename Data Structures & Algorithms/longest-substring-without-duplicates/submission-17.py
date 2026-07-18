class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        right = left
        n = len(s)
        s_map = {}
        max_sub = 0

        while (right < n and left < n):
            if (s[right] in s_map and s_map.get(s[right]) >= left): 
                left = s_map.get(s[right]) + 1
            s_map.update({s[right]: right})

            max_sub = max(max_sub, right - left + 1)
            right += 1
        
        return max_sub