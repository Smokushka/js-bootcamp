const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
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
    return getCountryDetails(location.country)
}