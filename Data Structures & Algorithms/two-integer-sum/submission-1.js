class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // @type <number, number>
        const hashMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff =  target - nums[i]

            if (!hashMap.has(nums[i])) {
                hashMap.set(diff, i);
            } else {
                console.log([i, hashMap.get(diff)])
                return [i, hashMap.get(nums[i])]
            }
            console.log([i, diff])
            console.log(hashMap)
         }

    }
}
