class Solution:
    def validPalindrome(self, s: str) -> bool:
        def isPalindrome(l: int, r: int) -> bool:
            left = l
            right = r
            print(f'got {s[l: r]}')

            while left < right:
                if s[left] == s[right]:
                    left += 1
                    right -= 1
                else: 
                    return False

            return True


        left = 0
        right = len(s) - 1

        print(left)
        print(right)
        while left < right:
            if s[left] != s[right]:
                return isPalindrome(left + 1, right) or isPalindrome(left, right - 1)        
            else:
                left += 1
                right -= 1
        
        return True
                