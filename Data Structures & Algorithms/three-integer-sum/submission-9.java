class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        int target = 0;
        int n = nums.length;
        List<List<Integer>> results = new ArrayList<List<Integer>>();
        int start = 0;

        while (start < n - 2) {
            if (start > 0 && nums[start] == nums[start - 1]) {
                start++;
                continue;
            }

            int left = start + 1;
            int right = n - 1;

            while (left < right) {
                int sum = nums[start] + nums[left] + nums[right];

                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    var list = new ArrayList();
                    list.add(nums[start]);
                    list.add(nums[left]);
                    list.add(nums[right]);
                    results.add(list);

                    left++;

                    while (nums[left - 1] == nums[left] && left < right) {
                        left++;
                    } 
                }
            }
            start++;
        }

        return results;
    }
}
