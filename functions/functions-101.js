// Function

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let convertFahrenheitToCelsius = function (tempInFahrenheit) {
    let tempInCelsius = (tempInFahrenheit - 32) * 5 / 9
    return tempInCelsius
}

let conversionResult = convertFahrenheitToCelsius(68)
console.log(conversionResult)