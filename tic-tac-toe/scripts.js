const htmlBoard = document.querySelector('.board');
const Gameboard = () => {
    let gameBoard = ['x', '', '', '', '', '', '', '', ''];
    const render = () => {
        htmlBoard.innerHTML = '';
        gameBoard.forEach((square, index) => {
            const newSquare = document.createElement('div', { class: block, id: index });
            newSquare.innerHTML = `${square}`;
            htmlBoard.appendChild(newSquare);
        });
    };
    const update = (index, marked) => {
        gameBoard[index] = marked;
    };
    return { gameBoard, update, render };
};

const board = Gameboard();
const createPlayer = (name, marked) => {
    return { name, marked };
};
const Game = () => {
    let players = [];
    let currentIndexPlayers;
    let gameOver;
    const start = () => {
        const player1 = createPlayer('Quang', 'X');
        const player2 = createPlayer('Kiet', 'O');
        players.push(player1, player2);
        gameOver = false;
        currentIndexPlayers = 0;
        board.render();
        while (gameOver === false) {
            const square = document.querySelectorAll('.block');
            square.forEach((block) => {
                block.addEventListener('click', () => {
                    const index = block.id;
                    const mark = players[currentIndexPlayers].marked;
                    board.update(index, mark);
                });
            });
            board.render();
            gameOver = checkForWin(board.gameBoard);
            if (gameOver) {
                const noti = document.querySelector('.noti');
                noti.textContent = `${players[currentIndexPlayers].name} win`;
            }
            currentIndexPlayers = 0 ? 1 : 0;
        }
    };
    return { start };
};

function checkForWin(board) {
    const winningCombination = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    for (let combo in winningCombination) {
        if (board[combo[0]] === board[combo[1]] || board[combo[2]] === board[combo[0]] || (board[combo[1]] === board[combo[2]] && board[combo[0]] != '' && board[combo[1]] != '' && board[combo[2] != ''])) {
            return true;
        }
    }
    return false;
}

const game = Game();
document.querySelector('button').addEventListener('click', () => {
    game.start();
});
