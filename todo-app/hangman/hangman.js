class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guestedLetters = []
        this.status = 'playing'    
    }
    getPuzzle () {
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
    makeGuess (guess) {
        const isPlaying = this.status === 'playing' ? true : false
        if(isPlaying) {
            guess = guess.toLowerCase()
            const isUnique = !this.guestedLetters.includes(guess)
            const isBadGuess = !this.word.includes(guess)
            if (isUnique) {
                this.guestedLetters.push(guess)
            }
            if (isUnique && isBadGuess && isPlaying) {
                this.remainingGuesses--
            }
            this.updateStatus()
        }
    }
    updateStatus () {
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
    getStatusMessage () {
        let statusMessage
        switch (this.status) {
            case 'playing': 
            statusMessage = `Guesses left: ${this.remainingGuesses}`
            break
            case 'failed':
            statusMessage = `Nice try!The word was ${this.word.join('')}`
            break
            case 'finished':
            statusMessage = `Great work! You guessed the word.`
        }
        return statusMessage
    }
}
