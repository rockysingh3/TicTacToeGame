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


let turnClick = e => {
    // turn function can take the human player or AI player
    // when there is a click on the board its the human player
    // pass the cell id and human play
    //turn(e.target.id, huPlayer);
    console.log(e.target.id);
}

let startGame = () => {
    // empties the whole board
    document.querySelector(".endgame").getElementsByClassName.display = "none";

    // makes an array with nums from 0 - 8
    origBoard = Array.from(Array(9).keys())

    // loop through each cell and changes its properties
    for(let i=0; i<cells.length; i++){
        cells[i].innerHTML = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}



startGame();



// let turn = (eID, player) => {
//     origBoard[eID] = player;
//     document.getElementById(eID).innerHTML = player;
//     let gameWon = checkWin(origBoard, player);
//     if(gameWon) gameOver(gameWon);
// }

// let checkWin = (board, player) => {
//     // loop through the whole board and see what postions have been played
//     // all the squares that have been played
//     let plays = board.reduce(((a,e,i) => (e === player)) ? a.concat(i) : a, []);
// }