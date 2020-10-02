let tipPercentReadable
let total = 100
let getTip = function (total, tipPercent = 0.2) {
    tipPercentReadable = tipPercent*100
    return total * tipPercent
}

let tip = getTip(total)
console.log(`A ${tipPercentReadable}% tip on $${total} would be $${tip}`)