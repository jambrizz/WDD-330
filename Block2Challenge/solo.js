//******************************  view ********************************* */
let gameBoard = document.getElementById('board');

createBoard(6,6);

function createBoard(col, row) {
    let table = document.createElement('table');
    table.setAttribute('id', 'grid');
    let count = 0;
    for(let i = 0; i < col; i++) {
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
    computerShipSelection();
};

/****************************************************************/

//******************************  model ********************************* */
function computerShipSelection(){
    const totalShips= 5;
    const shipLocations = [];
    for(let i = 0; i < totalShips;) {
        const number = Math.floor(Math.random() * 35);
        if(!shipLocations.includes(`${number}`)) {
            shipLocations.push(`${number}`);
            i++;
        }
    };
    generateShips(shipLocations, 'grid');
}

function generateShips(array, a) {
    array.forEach(element => {
        const cell = document.getElementById(`${element}`);
        cell.setAttribute('value', 'true');
    });
};

//******************************  controller ********************************* */
let battleships = 5;
let hits = 0;

grid.addEventListener('click', hit);

function hit(event) {
    const cell = event.target.id;
    const cellValue = document.getElementById(cell).getAttribute('value');
    const targetCell = document.getElementById(cell);
        if(cellValue == 'true') {
            targetCell.textContent = 'Hit';
            targetCell.style = "background-color: red;"
            ++hits;
        } else {
            targetCell.textContent = 'X';
        };
    checkForWin();
};

function checkForWin() {
    if(hits == battleships) {
        alert('You won, click OK to play again.');
        if(confirm) {
            window.location.reload();
        }
    }
};

