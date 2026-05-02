class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // brute force O(n^2) solution
        // const result = new Array(nums.length).fill(1);
        // const n = nums.length;
        // for (let i = 0; i < n; i++) {
        //     for (let j = 0; j < n; j++) {
        //         if (i === j) {
        //             continue;
        //         } else {
        //             console.log('indexes: ', i, j);
        //             console.log('values: ',nums[i], nums[j]);

        //             result[i] *= nums[j];
        //         }
        //     }
        // }
        // console.log(result);
        // return result;
        // prefix / postfix 
        const n = nums.length;
        const prefix = new Array(n).fill(1);
        const postfix = new Array(n).fill(1);
        const result = new Array(n).fill(1);
        let j = n - 1;
        for (let i = 0; i < n; i++) {
            if (i > 0) {
                prefix[i] = prefix[i - 1] * nums[i - 1];
                console.log(`prefix ${i}: `, prefix[i]);
            }
            if (j < n - 1) {
                postfix[j] = postfix[j + 1] * nums[j + 1]
                console.log(`postfix ${j}: `, postfix[i]);
            }
            j--;
        }
        for (let i = 0; i < n; i++) {
            result[i] = prefix[i] * postfix[i];
        }
        console.log('prefix:', prefix)
        console.log('postfix:', postfix)
        return result;
        
    }
}
