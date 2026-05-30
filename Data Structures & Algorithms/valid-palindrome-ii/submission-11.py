class Solution:
    char_skipped = False

    def isPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        
        print(f'got {s}')

        while left < right:
            if s[left] == s[right]:
                left += 1
                right -= 1
            else: 
                return False

        return True


    
    def validPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1

        print(left)
        print(right)
        while left < right:
            if s[left] != s[right]:
                return self.isPalindrome(s[left + 1: right + 1]) or self.isPalindrome(s[left: right])        
            else:
                left += 1
                right -= 1
        
        return True
                