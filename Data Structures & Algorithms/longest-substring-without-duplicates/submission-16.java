class Solution {
    public int lengthOfLongestSubstring(String s) {
        var charMap = new HashMap<String, Integer>();
        Integer left = 0;
        Integer right = left;
        Integer n = s.length();
        String[] sArr = s.split("");
        int maxSub = 0;

        while (right < n && left < n) {
            if (charMap.containsKey(sArr[right]) && charMap.get(sArr[right]) >= left) {
                left = charMap.get(sArr[right]) + 1;
            } 
            charMap.put(sArr[right], right);
            // for (String key : charMap.keySet()) {
            //    System.out.println("char = " + key + ", index = " + charMap.get(key));
            // }
            maxSub = Math.max(maxSub, right - left + 1);
            // System.out.println("left = " + left + ", right = " + right);
            // System.out.println("maxSub = " + maxSub);
            right++;
        }

        return maxSub;
    }
}
