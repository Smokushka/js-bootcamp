const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`,{})

    if (response.status === 200) {
        const countryData = await response.json()
        return countryData.find((country) => country.alpha2Code === countryCode).name
    } else {
        throw new Error('Unable to ftch the country data')
    }
}
const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=98ec1d1d5b3ef8')
    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error('Unable to fetch Location')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return await getCountryDetails(location.country)
}