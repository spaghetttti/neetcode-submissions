class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        int_set = set()

        for num in nums:
            if (num not in int_set): 
                int_set.add(num)

        print(int_set)

        max_seq_len = 0

        for num in nums:
            if (num - 1 in int_set):
                continue
            else:
                seq_len = 1
                while (num + seq_len in int_set):
                    seq_len += 1
                
                if (max_seq_len < seq_len):
                    max_seq_len = seq_len

        return max_seq_len