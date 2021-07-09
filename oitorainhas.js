const board = [];

let remainingQueens = 8;

for (let x = 0; x < 8; x++) {
    const line = ["_", "_", "_", "_", "_", "_", "_", "_"];
    const remaining = [0, 1, 2, 3, 4, 5, 6, 7]
    for (let lastLine of board) {
        for (let pos in lastLine) {
            if (lastLine[pos] === "R") {
                for (let i in remaining) {
                    if (remaining[i] == pos) {
                        remaining.splice(i, 1);
                    }
                }
            }
        }
    }

    line[remaining[randomInterval(0, remaining.length - 1)]] = "R";
    board.push(line);
}

function randomInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

for (const currentLine of board) {
    let line = "";
    for (const item of currentLine) {
        line += ` ${item} `;
    }
    console.log(line);
}