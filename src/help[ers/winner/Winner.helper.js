import { checkLine } from "../line/Line.helper";

export function checkIsWinn(board) {

    const rows = board.length;
    const [column] = board;
    const columns = column.length;

    // check rows
    for (let row = 0; row < rows; row++)
        for (let column = 0; column < columns - 3; column++)
            if (checkLine(
                board[column][row],
                board[column + 1][row],
                board[column + 2][row],
                board[column + 3][row])
            )
                return board[column][row];

    //check columns
    for (let column = 0; column < columns; column++)
        for (let row = 0; row < rows - 3; row++)
            if (checkLine(
                board[column][row],
                board[column][row + 1],
                board[column][row + 2],
                board[column][row + 3]
            ))
                return board[column][row];

    // check forward slash
    for (let row = 0; row < rows - 3; row++)
        for (let column = 0; column < 4; column++)
            if (checkLine(
                board[column][row],
                board[column + 1][row + 1],
                board[column + 2][row + 2],
                board[column + 3][row + 3])
            )
                return board[column][row];

    // check back slash
    for (let row = 0; row < rows - 3; row++)
        for (let column = 3; column < columns; column++)
            if (checkLine(
                board[column][row],
                board[column - 1][row + 1],
                board[column - 2][row + 2],
                board[column - 3][row + 3]
            ))
                return board[column][row];

    return '';
}
