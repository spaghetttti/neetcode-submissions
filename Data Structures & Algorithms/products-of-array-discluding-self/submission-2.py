class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix_arr = [1]
        for i, num in enumerate(nums):
            if (i > 0):
                prefix_arr.append(prefix_arr[i - 1] * nums[i -1])
            
        postfix_arr = [1] * len(nums)
        for j in range(len(nums) - 1, -1, -1):
            if (j < len(nums) - 1):
                postfix_arr[j] = postfix_arr[j + 1] * nums[j + 1]

        # postfix_arr = postfix_arr[::-1]
        print(prefix_arr)
        print(postfix_arr)

        for p in range(len(nums)):
            nums[p] = prefix_arr[p] * postfix_arr[p]

        return nums