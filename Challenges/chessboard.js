let axis = 8;

let chessBoard = "";

for (let y = 0; y < axis; y++) {
    for (let x = 0; x < axis; x++) {
        if ((x+y) % 2 == 0) {
            chessBoard += "  ";
        } else {
            chessBoard += "#";
        }
    }
    chessBoard += "\n";
}

console.log(chessBoard);
