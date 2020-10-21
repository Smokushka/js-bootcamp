const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guestedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getPuzzle = function () {
        let puzzle = ''
        this.word.forEach((letter,index) => {
            if(this.guestedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
}
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guestedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    const isPlaying = this.status === 'playing' ? true : false
    if (isUnique) {
        this.guestedLetters.push(guess)
    }
    if (isUnique && isBadGuess && isPlaying) {
        this.remainingGuesses--
    }
}
Hangman.prototype.updateStatus = function () {
    // failed
    if (this.remainingGuesses <= 0) {
        this.status = 'failed'
    }
    // finished
    let isCompleted = false;
    let lettersGuessedCorrectly = 0
    this.word.forEach((letter) => {
        if (this.guestedLetters.includes(letter)) {
            lettersGuessedCorrectly++
        }
    })

    if (lettersGuessedCorrectly === this.word.length) {
        isCompleted = true
    }

    if (isCompleted && this.remainingGuesses > 0) {
        this.status = 'finished'
    }
}


