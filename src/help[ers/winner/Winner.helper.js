export function checkIsWinn(board) {

    // check rows
    for (let row = 0; row < 6; row++)
        for (let column = 0; column < 4; column++)
            if (checkLine(
                board[column][row],
                board[column + 1][row],
                board[column + 2][row],
                board[column + 3][row])
            )
                return board[column][row];

    //check columns
    for (let column = 0; column < 7; column++)
        for (let row = 0; row < 4; row++)
            if (checkLine(
                board[column][row],
                board[column][row + 1],
                board[column][row + 2],
                board[column][row + 3]
            ))
                return board[column][row];

    // check forward slash
    for (let row = 0; row < 3; row++)
        for (let column = 0; column < 4; column++)
            if (checkLine(
                board[column][row],
                board[column + 1][row + 1],
                board[column + 2][row + 2],
                board[column + 3][row + 3])
            )
                return board[column][row];
}


function checkLine(i, j, k, l) {

    const firstNotNull = i !== null;
    const secondEqual = j === i;
    const thirdEqual = k === i;
    const fourthEqual = l === i;

    return firstNotNull && secondEqual && thirdEqual && fourthEqual;
}
