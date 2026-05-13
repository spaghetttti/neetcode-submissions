class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // Map <number, index[]>
        const numMap = new Map<number, number[]>();
        const result: number[][] = [];
        const resultArrayString = new Array<string>();

        for (let i = 0; i < nums.length; i++) {
            if (!numMap.has(nums[i])) {
                numMap.set(nums[i], [i]);
            } else {
                numMap.set(nums[i], [...numMap.get(nums[i]), i]);
            }
        }

        console.log("numSet: ", numMap);

        let left = 0;
        let right = 0;

        while (left < nums.length - 1) {
            right = left + 1;
            // console.log(`comparing: ${nums[left]} ${nums[right]}`);
            // console.log(`inxes: ${left} ${right}`);
            // console.log(`result: ${result}`);

            while (right < nums.length - 1) {
                const sum = -1 * (nums[left] + nums[right]);
                if (
                    numMap.has(sum) &&
                    numMap.get(sum).some((idx) => idx !== left && idx !== right)
                ) {
                    const newResultArray = [nums[left], nums[right], sum];
                    const newResultString = newResultArray.sort().join("");
                    // console.log("resultArrayString:", (resultArrayString));
                    // console.log("newResultString:", (newResultString));
                    // console.log("lol: ", resultArrayString.every((resultString) => console.log(`diff : ${resultString !== newResultString} with: `)));
                    if (
                        resultArrayString.every((resultString) => resultString !== newResultString)
                    ) {
                        result.push(newResultArray);
                        resultArrayString.push(newResultString);
                    }
                }

                right++;
            }

            left++;
        }

        return result;
    }
}
