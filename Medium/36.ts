function isValidSudoku(board:string [][]): boolean {
    const rows = Array.from({ length: 9},()=>new Set<string>());
    const cols = Array.from({ length: 9},()=>new Set<string>());
    const boxes = Array.from({ length: 9},()=>new Set<string>());

    for(let r =0; r<9; r++){
        for(let c=0; c < 9 ; c++){
            const val =board[r][c];
            if(val === "."){
                continue ;
            }

           const boxIdx = Math.floor(r/3)*3+Math.floor(c/3);

           if(rows[r].has(val) || cols[c].has(val) || boxes[boxIdx].has(val)){
            return false;
           }

           rows[r].add(val);
           cols[c].add(val);
           boxes[boxIdx].add(val);
        }
    }
    return true;
}

const board1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board1)); // true