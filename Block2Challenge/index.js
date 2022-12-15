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
            tCol.setAttribute('id', `p${count}`);
            tCol.setAttribute('value', false);
            count++;
            tRow.appendChild(tCol);
        }
        table.appendChild(tRow);
    }
    shipPlacement.appendChild(table);
    generatePlayersShips();
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

function generatePlayersShips() {
    const shipLocations = JSON.parse(localStorage.ships);
    console.log(shipLocations);
    shipsFromLS(shipLocations, 'shipsGrid');
};

function generateShips(array, a) {
    array.forEach(element => {
        const cell = document.getElementById(`${element}`);
        cell.setAttribute('value', 'true');
    });
};

function shipsFromLS(array, a) {
    array.forEach(element => {
        const cell = document.getElementById(`p${element}`);
        cell.setAttribute('value', 'true');
    });
};


//******************************  controller ********************************* */
let battleships = 5;
let hits = 0;

let computerHits = 0;

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
    targetGenerator();
};

function checkForWin() {
    if(hits == battleships) {
        alert('You won, click OK to play again.');
        if(confirm) {
            location.href = 'setships.html';
        }
    }
};

let targets = new Map([["0", "p0"], ["1", "p1"], ["2", "p2"], ["3", "p3"], ["4", "p4"], ["5", "p5"], ["6", "p6"], ["7", "p7"], ["8", "p8"], ["9", "p9"], ["10", "p10"], ["11", "p11"], ["12", "p12"], ["13", "p13"], ["14", "p14"], ["15", "p15"], ["16", "p16"], ["17", "p17"], ["18", "p18"], ["19", "p19"], ["20", "p20"], ["21", "p21"], ["22", "p22"], ["23", "p23"], ["24", "p24"], ["25", "p25"], ["26", "p26"], ["27", "p27"], ["28", "p28"], ["29", "p29"], ["30", "p30"], ["31", "p31"], ["32", "p32"], ["33", "p33"], ["34", "p34"], ["35", "p35"]]);

let pastTargets = new Map();

function targetGenerator() {
    const randomTarget = Math.floor(Math.random() * targets.size);
    const target = targets.get(`${randomTarget}`);
    const targetValue = document.getElementById(target).getAttribute('value');
    computerTargets(randomTarget, target, targetValue);
};

function computerTargets(a, b, c) {
    const key = a;
    const keyValue = b;
    const targetValue = c;
    if(!pastTargets.has(`${key}`)) {
        pastTargets.set(`${key}`, `${keyValue}`);
        if(targetValue == 'true') {
            document.getElementById(keyValue).textContent = 'Hit';
            document.getElementById(keyValue).style = "background-color: red;"
            ++computerHits;
            checkForComputerWin();
        } else {
            document.getElementById(keyValue).textContent = 'X';
        }
    } else{
        targetGenerator();
    };
};

function checkForComputerWin() {
    if(computerHits == battleships) {
        alert('You lost, click OK to play again.');
        if(confirm) {
            location.href = 'setships.html';
        }
    }
}