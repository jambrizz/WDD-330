//******************************  view ********************************* */
let gameBoard = document.getElementById('board');
let shipPlacement = document.getElementById('players-ships');
createBoard(6,6);
playersBoards(6,6);


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

function playersBoards(col, row) {
    let table = document.createElement('table');
    table.setAttribute('id', 'shipsGrid');
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
    shipPlacement.appendChild(table);
};


/****************************************************************/

//******************************  model ********************************* */
//generate ships
const totalShips = 5;
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

/****************************************************************/


//******************************  controller ********************************* */
let battleships = 5;
let hits = 0;

let playersBattleships = 0;
let computerHits = 0;

grid.addEventListener('click', hit);
shipsGrid.addEventListener('click', playerPlacementOfShips);

let shipsArray = [];

function playerPlacementOfShips(event) {
    const cell = event.target.id;
    const cellValue = document.getElementById(cell).getAttribute('value');
    const targetCell = document.getElementById(cell);
        if(cellValue == 'false') {
            //valueCell.setAttribute('value', 'true');
            //targetCell.setAttribute('value', 'true');
            shipsArray.push(id, `${targetCell.id}`, value, true);
            console.log(shipsArray);
            ++playersBattleships;
            console.log(playersBattleships);
            if(playersBattleships == 5) {
                console.log(shipsArray);
            }
        }
};

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
        alert('you won');
    }
};

