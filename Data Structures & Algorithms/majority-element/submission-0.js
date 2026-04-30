class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counter = {};

        for (const num of nums) {
            console.log(num);
            counter[num] = (counter[num] || 0) + 1;
        }

        for (const [key, value] of Object.entries(counter)) {
            console.log(key, value);
            if (value >= nums.length/ 2) return key;
        }

    }
}
