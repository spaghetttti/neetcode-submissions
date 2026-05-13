class Solution {
    // this method is newly added to JS , not yet available it looks like in this node.js pack
    difference<T>(setA: Set<T>, setB: Set<T>): Set<T> {
        const result = new Set<T>();
        for (const elem of setA) {
            if (!setB.has(elem)) {
            result.add(elem);
            }
        }
        return result;
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // Map <number, index>
        const numMap = new Map<number, number>();
        const result: number[][] = [];
        const resultArraySet = new Array<Set<number>>();

        for (let i = 0; i < nums.length; i++) {
            numMap.set(nums[i], i);
        }

        console.log("numSet: ", numMap);

        let left = 0;
        let right = 0;

        while (left < nums.length - 1) {
            right = left + 1;
            console.log(`comparing: ${nums[left]} ${nums[right]}`);
            console.log(`inxes: ${left} ${right}`);

            while (right < nums.length - 1) {
                const sum = -1 * (nums[left] + nums[right]);
                if (numMap.has(sum) && left != numMap.get(sum) && right != numMap.get(sum)) {
                    const newResultArray = [nums[left], nums[right], sum];
                    const newResultSet = new Set(newResultArray);
                    if (resultArraySet.every((resultSet) => this.difference(resultSet, newResultSet).size !== 0)) {
                        result.push(newResultArray)
                        resultArraySet.push(newResultSet)
                    }

                }   

                right++;
            }
            
            left++;
        }

        return result;
        
    }
}
