class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        low = 0
        n = len(numbers)
        high = n - 1

        while (low < high):
            sum_value = numbers[low] + numbers[high]
            if sum_value == target:
                return [low + 1, high + 1]
            elif sum_value > target:
                high -= 1
            else:
                low += 1

                