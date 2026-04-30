class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0;
        let right = nums.length - 1;
        let counter = 0;

        while (left != right && left < right) {
            console.log(counter, nums, "left:", left, "right:", right)

            if (nums[left] == val) {
                const temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                right--;
            } else { 
                left++;
                counter++;
            }
        }

        
        return nums[left] == val ? left : ++left;
    }
}
