class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        index = 0
        low = index + 1
        n = len(nums)
        high = n - 1

        nums.sort()

        results = []

        print(f"nums sorted {nums}")

        while (index < n):
            if (index > 0 and nums[index - 1] == nums[index]):
                index += 1
                continue

            low = index + 1
            high = n - 1 

            while low < high:   
                sum_value = nums[index] + nums[low] + nums[high]

                if (sum_value > 0):
                    high -= 1
                elif (sum_value < 0):
                    low += 1
                else:
                    results.append([nums[index], nums[low], nums[high]])
                    high -= 1
                    while (high > 0 and high < n and nums[high] == nums[high + 1]):
                        high -= 1

                    low += 1
                    while (low < n and low > 0 and nums[low - 1] == nums[low]):
                        low += 1
                    
                    
            index += 1

        print(results)

        return results