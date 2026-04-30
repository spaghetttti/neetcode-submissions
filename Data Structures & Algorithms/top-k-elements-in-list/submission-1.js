class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // type number, number
        console.log('nums: ', nums)
        console.log('k: ', k)

        const numMap = new Map();

        for (const num of nums) {
            if (!numMap.has(num)) {
                numMap.set(num, 0);
            }
            numMap.set(num, numMap.get(num) + 1);

        }
        console.log('num / freq ', numMap)
        const popularities = Array.from(numMap.entries());
        console.log(popularities.sort((a, b) => b[1] - a[1]))
        return popularities.map(a => a[0]).slice(0, k)
    }
}