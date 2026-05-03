class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // write a set for nums 
        // loop through the nums in set and check if (n at i +1 exists and is bigger by 1)
        // if yes move to that one and check again and add to counter value, if not move to next num
        // do the "move forward" untill you find the element and counter value to max 
        // move to next num and do everything again comparing the counter value to previously saved max
        const numsSet = new Set(nums);
        let maxCounter = 0;

        for (const num of numsSet) {

            if (!numsSet.has(num - 1)) {
                let localCounter = 1;
                while (numsSet.has(num + localCounter)) {
                    localCounter++;
                }
                if (localCounter > maxCounter) { 
                    maxCounter = localCounter;
                }
            }

        }

        // for (let i = 0; i < nums.length; i++) {
        //     let localCounter = 1;
        //     while (numsSet.has(nums[i] + localCounter)) {
        //         localCounter++;
        //     }
        //     if (localCounter > maxCounter) {
        //         maxCounter = localCounter;
        //     }
        // }

        console.log(maxCounter);

        return maxCounter;
    }
}
