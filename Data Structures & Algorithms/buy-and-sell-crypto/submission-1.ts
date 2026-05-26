class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let anchor = 0;
        let pointer = anchor + 1;
        const profits = new Array(prices.length).fill(Number.MIN_SAFE_INTEGER);

        // for (let i = 0; i < prices.length; i++) {
            
        // }
        while (anchor < prices.length) {
            pointer = anchor + 1;
            while (pointer < prices.length) {
                const gain: number = prices[pointer] - prices[anchor];
                console.log(`days ${anchor} and ${pointer} with a gain of ${gain}`)

                if (profits[anchor] < gain) {
                    profits[anchor] = gain;
                }
                pointer++;
            }
            anchor++;
        }

        console.log(profits)
        profits.sort(((a, b) => b - a));
        console.log(profits)
        return profits[0] < 0 ? 0 : profits[0];
    }
}
