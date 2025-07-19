const createPlayer = (name, marked) => {
    return { name, marked };
};
const htmlBoard = document.querySelector('.board');
const GameBoard = () => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    const getBoard = () => gameBoard;
    const render = () => {
        board.innerHTML = '';
        gameBoard.forEach((square, index) => {
            const newSquare = document.createElement('div');
            newSquare.setAttribute('data-index', index);
            newSquare.classList.add('block');
            newSquare.textContent = square;
            htmlBoard.appendChild(newSquare);
        });
    };
    const update = (index, marked) => {
        if (gameBoard[index] != '') {
            return;
        }
        gameBoard[index] = marked;
        render();
    };
    const reset = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        render();
    };
    return { render, update, reset, getBoard };
};

const noti = document.querySelector('.noti');
const Game = (() => {
    const board = GameBoard();
    const player1 = createPlayer('Player1', 'X');
    const player2 = createPlayer('Player2', 'O');
    let currentPlayer = player1;
    const handleClick = (e) => {
        const index = e.target.getAttribute('data-index');
        const idx = parseInt(index);
        board.update(idx, currentPlayer.marked);
        if (checkForWin(board)) {
            alert(`${currentPlayer.name} win !!`);
        }

        if (!board.getBoard().includes('')) {
            alert('Draw');
        }
        // change player
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const start=()=>{
        board.reset();
        currentPlayer=player1;
        htmlBoard.removeEventListener('click', handleClick);
        htmlBoard.addEventListener('click', handleClick);

    }
    return {start};
})();

const checkForWin = (board) => {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombination.some(([a, b, c]) => {
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
};
document.querySelector('button').addEventListener('click', Game.start);
