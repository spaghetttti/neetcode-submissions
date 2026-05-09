class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number) {
        // array of empty arrays 
        const bucketArray = new Array(nums.length + 1).fill([]);

        // Map<number, frequency>
        const hashMap = new Map<number, number>();

        for (const num of nums) {
            if (!hashMap.has(num)) {
                hashMap.set(num, 0);
            }
            hashMap.set(num, 1 + hashMap.get(num));
        }
        console.log('bucketArray ', bucketArray)

        for (const [num, freq] of hashMap.entries()) {
            console.log('num: ', num)
            console.log('freq: ', freq)
            console.log(`before bucketArray[${freq}]: `, bucketArray[freq])
            bucketArray[freq] = [...bucketArray[freq], num];
            console.log(`after bucketArray[${freq}]: `, bucketArray[freq])
            console.log('after bucketArray ', bucketArray)
        }

        console.log('bucketArray ', bucketArray)
        console.log('hashMap ', hashMap)

        let kCounter = k; 
        const result = [];
        for (let i = nums.length; i > 0 && kCounter > 0; i--) {
            console.log('bucket at i: ', i , bucketArray[i])
           if (bucketArray[i].length > 0) {
               kCounter -=  bucketArray[i].length;
               result.push(...bucketArray[i]);
                console.log('left places in result ', kCounter)
                console.log('result ', result)
           }

        }
        console.log(result);

        return result;
    }
}
