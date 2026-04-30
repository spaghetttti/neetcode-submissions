class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashMapS = new Map();
        const hashMapT = new Map();

        if (s.length != t.length) return false;

        for (const sLetter of s) {
            if (hashMapS.has(sLetter)) {
                hashMapS.set(sLetter, hashMapS.get(sLetter) + 1);
            } else {
                hashMapS.set(sLetter, 1);
            }
        }

        for (const tLetter of t) {
            if (hashMapT.has(tLetter)) {
                hashMapT.set(tLetter, hashMapT.get(tLetter) + 1);
            } else {
                hashMapT.set(tLetter, 1);
            }
        }
        // console.log(hashMapS);
        // console.log(hashMapT);
        for (const [letter, number] of hashMapS) {
            console.log(letter, number);

            if (!hashMapT.has(letter) || hashMapT.get(letter) != number) {
                return false;
            }
        }


        return true;
    }
}
