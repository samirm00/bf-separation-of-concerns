function gameBoard(boardData) {
    debugger;
    let table = document.createElement('table');

    for (let i = 0; i < boardData.length; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < boardData[i].length; j++) {
            let td = document.createElement('td');

            td.innerText = boardData[i][j];

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    return table;
}

gameBoard([
    ['O', 'X', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'O'],
]);
