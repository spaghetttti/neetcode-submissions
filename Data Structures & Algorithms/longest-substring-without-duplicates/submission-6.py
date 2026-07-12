class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        # right = left + 1
        n = len(s) - 1
        sub_max = 0

        if (n == 0):
            return 1

        while (left < n):
            # print(f'left: {left}')
            while s[left] == s[left + 1] and left < n - 1:
                left += 1
            
            right = left
            sub_current = 0
            hash_set = set()

            while right <= n:
                if (s[right] not in hash_set):
                    # print(f'right in loop: {right} with value {s[right]}')
                    hash_set.add(s[right])
                    sub_current += 1
                else:
                    break
                right += 1

            print(hash_set)
            sub_max = max(sub_max, sub_current)

            left += 1                    
    
        return sub_max
