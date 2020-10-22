const getPuzzle = function (wordCount,callback) {
    const request = new XMLHttpRequest()
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.response)
            callback(undefined,data.puzzle)
        } else if (e.target.readyState === 4) {
            const error = '400 Error'
            callback(error,undefined)
        } 

    })
}

const getCountryDetails = function (countryCode, callback) {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.response).find((country) => country.alpha2Code === countryCode).name
            callback(undefined,data)
        } else if (e.target.readyState === 4) {
            const error = '400 Error'
            callback(error,undefined)
        } 

    })
}