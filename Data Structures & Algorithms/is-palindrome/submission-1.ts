class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string) {
        let left = 0;
        let right = s.length - 1;
        const ss = s.split('');
        // easier whays to do it , or isAlphaNumeric function
        // let RegExAlphaNum = /^[a-z0-9]+$/i; 
        console.log(ss);
        console.log(this.isAlphaNumeric(ss[left]));
        console.log(this.isAlphaNumeric(ss[right]));
        while (left < right) {
            if (!this.isAlphaNumeric(ss[left])) {
                left++;
                continue;
            }
            if (!this.isAlphaNumeric(ss[right])) {
                right--;
                continue;
            }

            if (ss[left].toLowerCase() !== ss[right].toLowerCase()) {
                return false;
            } else {
                left++;
                right--;
            }
        }
        return true;
    }

    isAlphaNumeric(str) {
        var code, i, len;

        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
            }
        }
        return true;
    };
}