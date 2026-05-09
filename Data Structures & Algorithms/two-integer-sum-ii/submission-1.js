class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // O(n^2) apparoch = brute force 
        let first = 0;
        let second = 1;
        let sum = numbers[first] + numbers[second];
        // while (sum != target) {
        //     if (sum > target || second === numbers.length - 1) {
        //         first++;
        //         second = first + 1;
        //     } else { 
        //         second++;
        //     }

        //     sum = numbers[first] + numbers[second];
        // } 


        // using all the constraints like nums is sorted, first < second always, we can do better: 
        second = numbers.length - 1;
        sum = numbers[first] + numbers[second];
        
        while (sum !== target) {
            if (sum < target) { 
                first++;
            } else {
                second--;
            }
            sum = numbers[first] + numbers[second];
        }

        return [++first, ++second];
    }
}
