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

    return {debugConsole}
}

const players = () => {
    const player1 = "X"
    const player2 = "Y"
}

const gameProcess = () => {
    const turnDOM = document.getElementById("turn")
    let turn = "X"
    
    turnDOM.textContent = turn

    const square = Array.from(document.querySelectorAll('#board div'))
    const singular_square = document.getElementById("board")

    let counter = 0
    square.forEach(() => {
        let square = singular_square.children[counter]
        square.addEventListener('click', () => {
            console.log("clicked!")
        })
        counter++
    })
}

function gameInit() {
    gameProcess()
}

gameInit()

board = gameBoard()
board.debugConsole()