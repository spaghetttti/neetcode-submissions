class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = new Set();
        console.log("start processing rows...")
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const item = board[i][j];
                if (!rowSet.has(item)) {
                    if (item !== '.') rowSet.add(item);
                } else {
                    return false;
                }
            }
            // console.log(`row: ${i} `, `rowSet: ${Array.from(rowSet.keys())}`);
            rowSet =  new Set();
        }

        // check each column as a set in a loop
        let columnSet = new Set();
        console.log("start processing columns...")
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {  //or use i , j indexes 
                const item = board[j][i];
                if (!columnSet.has(item)) {
                    if (item !== '.') columnSet.add(item);
                } else {
                    return false;
                }
            }
            // console.log(`column: ${i} `, `columnSet: ${Array.from(columnSet.keys())}`);
            columnSet =  new Set();
        }
        // check each 3x3 sub square as a set in a loop
        console.log("start processing the sub boxes...")
        // Outer loop: which box (0-8)
        // this was boxSet is declared once and reused
        let boxSet = new Set();
        for (let boxNum = 0; boxNum < 9; boxNum++) {
            
            // Inner loops: cells within that box (3x3)
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    // Calculate actual board position
                    const boxColStart = 3 * (boxNum % 3);
                    const boxRowStart = 3 * Math.floor(boxNum/3);
                    const actualRow = boxRowStart + row;
                    const actualCol = boxColStart + col;
                    const item = board[actualRow][actualCol];
                    console.log(`box at: ${boxRowStart} ${boxColStart}`)
                    if (!boxSet.has(item)) {
                        if (item !== '.') boxSet.add(item);
                    } else {
                        return false;
                    }
                }
            }
            console.log(`box: ${boxNum} `, `boxSet: ${Array.from(boxSet.keys())}`);

            boxSet = new Set();
        }

        return true;
    }
}