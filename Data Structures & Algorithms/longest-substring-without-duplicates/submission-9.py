class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        if (len(s) == 0):
            return 0

        if (len(s) == 1):
            return 1

        left = 0
        right = left + 1
        n = len(s)
        s_set = set(s[left])
        max_set = 0

        while (right < n):
            while (s[right] in s_set):
                s_set.discard(s[left])
                left += 1

            s_set.add(s[right])
            right += 1
            max_set = max(max_set, len(s_set))
            print(f'set: {s_set}')
            print(f'left / right: {left} / {right}')

        return max_set
