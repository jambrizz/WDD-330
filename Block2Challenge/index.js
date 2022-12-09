//******************************  view ********************************* */
let gameBoard = document.getElementById('board');
createBoard(6,6);

function createBoard(col, row) {
    let table = document.createElement('table');
    table.setAttribute('id', 'grid');
    let count = 0;
    for(let i = 0; i < col; i++) {
        //let count = 0;
        let tRow = document.createElement('tr');
        for(let j = 0; j < row; j++) {
            let tCol = document.createElement('td');
            tCol.setAttribute('class', 'cell');
            tCol.setAttribute('id', `${count}`);
            tCol.setAttribute('value', 'false');
            count++;
            tRow.appendChild(tCol);
        }
        table.appendChild(tRow);
    }
    gameBoard.appendChild(table);
    generateShips();
};
/***************************************************************8 */

//******************************  model ********************************* */
//generate ships

function generateShips() {
    //const location = Math.floor(Math.random() * 35);
    //let i = 0;
    const totalShips = 5;
    for(let i = 0; i < totalShips;) {
        const location = Math.floor(Math.random() * 35);
        console.log(location);
        const cell = document.getElementById(`${location}`);
        const value = cell.getAttribute('value');
            if(value != true) {
                cell.setAttribute('value', 'true');
                i++;
            }
    };
};

function hit(event) {
    const cell = event.target.id;
    const cellValue = document.getElementById(cell).getAttribute('value');
    const targetCell = document.getElementById(cell);
    if(cellValue == 'false') {
        targetCell.textContent = 'X';
    } else {
        targetCell.textContent = 'Hit';
    };
    //const cellId = document.getElementById(cell);
    //console.log(cellId);
};

/****************************************************************/


//******************************  controller ********************************* */
gameBoard.addEventListener('click', hit);