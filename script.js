let origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7]
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const cells = document.querySelectorAll('.cell');
startGame();

let startGame = () => {
    document.querySelector(".endgame").getElementsByClassName.display = "none";
    // makes an array with nums from 0 - 8
    origBoard = Array.from(Array(9).keys())
    for(let i=0; i<cells.length; i++){
        cells[i].innerHTML = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

let turnClick = e => {
    // turn function can take the human player or AI player
    // when there is a click on the board its the human player
    // pass the cell id and human play
    turn(e.target.id, huPlayer);
}

let turn = (eID, player) => {
    origBoard[eID] = player;
    document.getElementById(eID).innerHTML = player;
}