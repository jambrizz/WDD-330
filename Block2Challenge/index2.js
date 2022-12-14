/************view****************** */

let shipPlacement = document.getElementById('players-ships');

playersBoards(6,6);

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


/******************************  model ********************************* */

/*********************************************************************** */


/************************Controller ************************************ */

shipsGrid.addEventListener('click', playerPlacementOfShips);

let playersBattleships = 0;
const shipLocations = [];

function playerPlacementOfShips(event) {
    const cell = event.target.id;
    const cellValue = document.getElementById(cell).getAttribute('value');
    const targetCell = document.getElementById(cell);
        if(!shipLocations.includes(`${targetCell.id}`)) {
            if(cellValue == 'false') {
                shipLocations.push(`${targetCell.id}`);
                targetCell.style.backgroundColor = 'red';
                targetCell.textContent = 'Ship';
                console.log(shipLocations);
                ++playersBattleships;
                console.log(playersBattleships);
                if(shipLocations.length == 5) {
                    localStorage.setItem('ships', JSON.stringify(shipLocations));
                    alert('you have placed all your ships, click ok to start the game');
                    startGame();
                    console.log(localStorage.getItem('shipLocations'));
                }
            }
        } else{
            alert('you have already placed a ship there');
        };
};

function startGame() {
    location.href = 'vscomputer.html';
}