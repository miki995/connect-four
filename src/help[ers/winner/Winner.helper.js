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
}


function checkLine(i, j, k, l) {

    const firstNotNull = i !== null;
    const secondEqual = j === i;
    const thirdEqual = k === i;
    const fourthEqual = l === i;

    return firstNotNull && secondEqual && thirdEqual && fourthEqual;
}
