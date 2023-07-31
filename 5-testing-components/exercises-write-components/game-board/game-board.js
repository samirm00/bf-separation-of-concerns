/**
 * Renders a table from a 2D array of arrays
 * Each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} boardData - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */

function gameBoard(boardData) {
    let table = document.createElement('table');

    boardData.forEach((row) => {
        let tr = document.createElement('tr');

        row.forEach((cell) => {
            let td = document.createElement('td');

            td.innerText = cell;

            tr.appendChild(td);
        });

        table.appendChild(tr);
    });

    return table;
}

export default gameBoard;
