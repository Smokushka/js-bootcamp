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


getPuzzle("3",(error,data) => {
    if(error) {
        console.log(error)
    } else if (data) {
        console.log(data)
    }
})

getCountryDetails('US',(error,data) => {
    if(error) {
        console.log(error)
    } else if (data) {
        console.log(data)
    }
})
// const request = new XMLHttpRequest()
// request.open('GET', 'http://puzzle.mead.io/puzzle')
// request.send()

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.response)
//         console.log(data)
//     }
// })