let winner;

const gameBoard = () => {
    let grid = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]

    const winningCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const debugConsole = () => {
        console.log(`The actual state of the grid is:
        | ${grid[0]} | ${grid[1]} | ${grid[2]} |
        | ${grid[3]} | ${grid[4]} | ${grid[5]} |
        | ${grid[6]} | ${grid[7]} | ${grid[8]} |`)
    }

    return {debugConsole, grid, winningCombo}
}

const gameProcess = () => {
    board = gameBoard()

    const turnDOM = document.getElementById("turn")
    let turn = "X"
    turnDOM.textContent = turn
    
    const handleTurn = () => {
        turn == "X" ? turn = "O" : turn = "X"
        turnDOM.textContent = turn

    }
    
    const winnerCheck = () => {
        let winner = null;
        let grid = board.grid
        board.winningCombo.forEach(function(combo, index) {
            if (grid[combo[0]] && grid[combo[0]] === grid[combo[1]] && grid[combo[0]] === grid[combo[2]]) {
                winner = grid[combo[0]];
            }
        });
        return winner ? winner : grid.includes('') ? null : 'Tie';
    }
    
    const markBox = (index) => {
        board.grid[index] = turn
        board.debugConsole()

        winner = winnerCheck()
        console.log(winner)
        handleTurn()
    }

    /* Game Init */
    const square = Array.from(document.querySelectorAll('#board div'))
    const singular_square = document.getElementById("board")

    for (let i = 0; i < square.length; i++){
        let square = singular_square.children[i]
        square.addEventListener('click', () => {
            if (winner == null && board.grid[i] == ''){
                square.textContent = turn
                markBox(i)
            }
        })
    }
}

function gameInit() {
    gameProcess()
}

gameInit()