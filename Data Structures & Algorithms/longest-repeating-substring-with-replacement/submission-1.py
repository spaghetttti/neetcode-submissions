class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # max size
        # replacements_neeeded = window_size - number_of_most_frequent_char
        # replacements_neeeded <= k
        # if replacements_neeeded < k , save in max size, move right pointer +1, dont move left
        # if replacements_neeeded > k, move left pointer +1 , dont move right
        # if replacements_neeeded = k, save in max size, move left and right pointer +1

        left = 0
        right = left 
        n = len(s)
        max_substring = 0

        while (right < n):
            freq_map = {}
            window_size = right - left + 1
            # print(f's[left:right] {s[left:right+1]}')

            for char in s[left:right + 1]:
                if char not in freq_map:
                    freq_map.update({char: 1})
                else:
                    freq_map.update({char: 1 + freq_map.get(char)})

            number_of_most_frequent_char = 0
            for char in freq_map:
                number_of_most_frequent_char = max(freq_map[char], number_of_most_frequent_char)

            replacements_neeeded = window_size - number_of_most_frequent_char
            # print(f'window_size: {window_size}')
            # print(f'number_of_most_frequent_char: {number_of_most_frequent_char}')
            # print(f'freq_map: {freq_map}')

            if (replacements_neeeded < k):
                max_substring = max(max_substring, window_size)
                right += 1
            elif (replacements_neeeded > k):
                left += 1
            else:
                max_substring = max(max_substring, window_size)
                right += 1
            # print(f'max_substring: {max_substring}')
            # print(f'=============================')


        return max_substring


