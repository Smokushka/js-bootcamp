const game1 = new Hangman('Black Cat',2)

const renderPuzzle = function () {
    guessesLeftEl = document.querySelector('#guesses-left')
    puzzleWordEl = document.querySelector('#puzzle-word')
    statusEl = document.querySelector('#status')
    guessesLeftEl.textContent = game1.statusMessage
    puzzleWordEl.textContent = game1.puzzle
    statusEl.textContent = game1.status
}

renderPuzzle()
window.addEventListener('keypress', (e) => {
    const guess = e.key
    game1.makeGuess(guess)
    renderPuzzle()
})


getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
})

getCountryDetails('US').then((countryName) => {
    console.log(countryName)
}).catch((error) => {
    console.log(error)
})

const createTipper = (tipAmount) => {
    return (billAmount) => tipAmount * billAmount
}

const standardtip = createTipper(0.15)
console.log(standardtip(100))