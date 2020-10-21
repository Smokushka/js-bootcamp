const game1 = new Hangman('Cat',2)

const renderPuzzle = function () {
    guessesLeftEl = document.querySelector('#guesses-left')
    puzzleWordEl = document.querySelector('#puzzle-word')
    statusEl = document.querySelector('#status')
    guessesLeftEl.textContent = game1.remainingGuesses
    puzzleWordEl.textContent = game1.getPuzzle()
    statusEl.textContent = game1.status
}

renderPuzzle()
window.addEventListener('keypress', (e) => {
    const guess = e.key
    game1.makeGuess(guess)
    game1.updateStatus()
    renderPuzzle()
})