let game1


const renderPuzzle = function () {
    guessesLeftEl = document.querySelector('#guesses-left')
    puzzleWordEl = document.querySelector('#puzzle-word')
    guessesLeftEl.textContent = game1.statusMessage
    puzzleWordEl.innerHTML= ''

    game1.puzzle.split('').forEach(letter => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleWordEl.appendChild(letterEl)
    });
}
const startNewGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle,5)
    renderPuzzle()
}
startNewGame()

window.addEventListener('keypress', (e) => {
    const guess = e.key
    game1.makeGuess(guess)
    renderPuzzle()
})

const resetEl = document.querySelector('#reset')

resetEl.addEventListener('click',startNewGame)