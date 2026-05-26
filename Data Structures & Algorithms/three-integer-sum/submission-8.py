class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        numsMap = {}
        results = {}

        for i, num in enumerate(nums):
            if (num not in numsMap):
                numsMap[num] = []
            numsMap[num].append(i) 

        print("numsMap: ", numsMap)

        left = 0
        right = 0

        while (left < len(nums) - 1):
            right = left + 1
            while (right < len(nums) - 1):
                thirdNum = -1 * (nums[left] + nums[right])
                # print(f"thirdNum: {thirdNum}")
                # print(f"nums at left and right: {nums[left]} {nums[right]}")

                if (thirdNum in numsMap and any(index != left and index != right for index in numsMap[thirdNum])):
                    result = [nums[left], nums[right], thirdNum]
                    result.sort()
                    # print(f"result: {result}")

                    if (",".join(map(str, result)) not in results):  # Convert to strings
                        results[",".join(map(str, result))] = result


                # print(f"results: {results}")
                right += 1
            
            left += 1
        

        resultsList = []
        for key, value in results.items():
            resultsList.append(value)
        
        return resultsList

        