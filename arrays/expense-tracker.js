const account = {
    name: 'Alex Shabanov',
    expenses: [],
    addExpense: function (description,amount) {
        this.expenses.push({
            description,
            amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(expense => {
            totalExpenses = totalExpenses + expense.amount
        })
        let totalIncome = 0
        this.income.forEach(item => {
            totalIncome = totalIncome + item.amount
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}, $${totalIncome} in income, $${totalExpenses} in expenses`
    },
    income: [],
    addIncome: function (description, amount) {
        this.income.push({
            description,
            amount
        })
    }
}

account.addExpense('Parking', 5)
account.addExpense('Amazon', 15)
account.addIncome('Salary', 1000)

console.log(account.getAccountSummary())
console.log(account)