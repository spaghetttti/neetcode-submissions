class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const str of strs) {
            const len = str.length;
            result += `${len}|` + str;
        }
        console.log('encoded result: ', result)
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let accumulator = "";
        const result = [];
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            accumulator += char;
            console.log('accumulator: ', accumulator);
            if (accumulator.includes("|")) {
                const lenNum = Number(accumulator.substring(0, accumulator.length - 1));
                console.log('accumulator.substring(0, accumulator.length - 1): ', accumulator.substring(0, accumulator.length - 1))
                console.log('lenNum: ', lenNum)
                result.push(str.slice(i + 1, i + 1 + lenNum));
                accumulator = "";
                i = i + lenNum;
            }
        }
        return result;
    }
}
