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

    return {debugConsole, grid}
}

board = gameBoard()

const gameProcess = () => {
    const turnDOM = document.getElementById("turn")
    let turn = "X"
    turnDOM.textContent = turn
    
    const handleTurn = () =>{
        turn == "X" ? turn = "O" : turn = "X"
        turnDOM.textContent = turn

    }

    /* Game Init */
    const square = Array.from(document.querySelectorAll('#board div'))
    const singular_square = document.getElementById("board")

    for (let i = 0; i < square.length; i++){
        let square = singular_square.children[i]
        square.addEventListener('click', () => {
            square.textContent = turn
            board.grid[i] = turn
            board.debugConsole()
            
            handleTurn()
        })
    }
}

function gameInit() {
    gameProcess()
}

gameInit()