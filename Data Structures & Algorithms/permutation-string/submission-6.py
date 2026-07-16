class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # we save s1 as a hashmap, (char -> freq) 
        # the window is fixes as size of the hashmap
        # we move the window one index at a time as soon as in-window currrent hashmap matches with s1-hashmap , by key and their values
        # the in-window currnet hashmap is global and gets updates by each left++ and right++ shift 

        if (len(s1) > len(s2)):
            return False


        s1_map = {}

        for char in s1:
            s1_map[char] = s1_map.get(char, 0) + 1

        window_size = len(s1)
        left = 0
        right = left
        s2_map = {}
        n = len(s2) - 1

        print(f's1_map {s1_map}')

        while (right < window_size and right <= n):
            s2_map[s2[right]] = s2_map.get(s2[right], 0) + 1
            right += 1
        print(f'first fill s2_map {s2_map}')
        right -= 1
        print(f'left n right {left} / {right}')

        while right < n + 1:
            # print(f's2_map {s2_map}')
            # print(f'left n right {left} / {right}')
            # print(f'window elemens: {s2[left:right + 1]}')

            result = True        
            for char in s1_map:
                # print(f'char from s1 map {char}')
                s2_sub_freq = s2_map.get(char, "not_found")
                if s2_sub_freq == "not_found" or s1_map[char] != s2_sub_freq:
                    result = False
            if result:
                return result

            if (left < n):
                s2_map[s2[left]] = s2_map.get(s2[left], 0) - 1
                left += 1
            right += 1
            if (right < n + 1):
                s2_map[s2[right]] = s2_map.get(s2[right], 0) + 1
        
        return False

            


