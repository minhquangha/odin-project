// JavaScript
const htmlBoard = document.querySelector('.board');

const Gameboard = () => {
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => gameBoard;

    const update = (index, marked) => {
        if (gameBoard[index] === '') {
            gameBoard[index] = marked;
            render(); // cập nhật lại UI
        }
    };

    const reset = () => {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        render();
    };

    const render = () => {
        htmlBoard.innerHTML = '';
        gameBoard.forEach((square, index) => {
            const newSquare = document.createElement('div');
            newSquare.classList.add('block');
            newSquare.setAttribute('data-index', index);
            newSquare.textContent = square;
            htmlBoard.appendChild(newSquare);
        });
    };

    return { getBoard, update, render, reset };
};

const createPlayer = (name, marked) => ({ name, marked });

const Game = (() => {
    const board = Gameboard();
    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');
    let currentPlayer = player1;
    let gameOver = false;

    const handleClick = (e) => {
        const index = e.target.getAttribute('data-index');
        if (index === null || gameOver) return;

        const idx = parseInt(index);
        const currentBoard = board.getBoard();

        if (currentBoard[idx] !== '') return;

        board.update(idx, currentPlayer.marked);

        if (checkForWin(board.getBoard())) {
            alert(`${currentPlayer.name} wins!`);
            gameOver = true;
            return;
        }

        if (!board.getBoard().includes('')) {
            alert("It's a draw!");
            gameOver = true;
            return;
        }

        // Chuyển lượt
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const start = () => {
        board.reset();
        currentPlayer = player1;
        gameOver = false;
        htmlBoard.removeEventListener('click', handleClick);
        htmlBoard.addEventListener('click', handleClick);
    };

    return { start };
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

document.querySelector('button').addEventListener('click', () => {
    Game.start();
});
