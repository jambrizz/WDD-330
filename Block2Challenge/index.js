//******************************  view ********************************* */
let gameBoard = document.getElementById('board');
let shipPlacement = document.getElementById('players-ships');
createBoard(6,6);
createPlayersBoard(6,6);


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

function createPlayersBoard(col, row) {
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
function computerShipSelection(){
    const totalShips= 5;
    //const number = Math.floor(Math.random() * 35);
    const shipLocations = [];
    for(let i = 0; i < totalShips;) {
        const number = Math.floor(Math.random() * 35);
        if(!shipLocations.includes(`${number}`)) {
            shipLocations.push(`${number}`);
            i++;
        }
    };
    console.log(shipLocations);
    generateShips(shipLocations, 'grid');
}

function generatePlayersShips() {
    const playersShips = [];
    Object.keys(localStorage.shipLocations).forEach(key => {
        playersShips.push(localStorage.shipLocations[key]);
    });
    console.log(playersShips);
    //generateShips(ships, 'shipsGrid');
};

function generateShips(array, a) {
    array.forEach(element => {
        const cell = document.getElementById(`${element}`);
        cell.setAttribute('value', 'true');
    });
};

/*
const totalShips = 5;
function generateShips() {
    //const location = Math.floor(Math.random() * 35);
    //let i = 0;
    const totalShips = 5;
    for(let i = 0; i < totalShips;) {
        const location = Math.floor(Math.random() * 35);
        //console.log(location);
        const cell = document.getElementById(`${location}`);
        const value = cell.getAttribute('value');
            if(value != true) {
                cell.setAttribute('value', 'true');
                i++;
            }
    };
};
*/
/****************************************************************/


//******************************  controller ********************************* */
let battleships = 5;
let hits = 0;

//let playersBattleships = 0;
let computerHits = 0;

grid.addEventListener('click', hit);

/*
shipsGrid.addEventListener('click', playerPlacementOfShips);

const shipLocations = [];

function playerPlacementOfShips(event) {
    //const shipLocations = {};
    const cell = event.target.id;
    const cellValue = document.getElementById(cell).getAttribute('value');
    const targetCell = document.getElementById(cell);
        if(cellValue == 'false') {
            //valueCell.setAttribute('value', 'true');
            //targetCell.setAttribute('value', 'true');
            shipLocations.push(`${targetCell.id}`);
            console.log(shipLocations);
            ++playersBattleships;
            console.log(playersBattleships);
            if(shipLocations.length == 5) {
                console.log('you have placed all your ships');
                localStorage.setItem('shipLocations', JSON.stringify(shipLocations));
            }
        }
};
*/

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

