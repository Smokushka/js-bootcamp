let todos = getSavedTodos()

let filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos,filters)

// Search Input Event
document.querySelector('#filter').addEventListener('input',(e) => {
    filters.searchText = e.target.value
    renderTodos(todos,filters)
    renderUncompletedMessage(todos)
})
// Hide Completed Event
document.querySelector('#hide-completed').addEventListener('change',(e) => {
        filters.hideCompleted = e.target.checked
        renderTodos(todos,filters)
})
// Add new Todo Event
document.querySelector('#new-todo-form').addEventListener('submit',(e) => {
    e.preventDefault()
    const todoText = e.target.elements.todoText.value.trim()
    if (todoText.split('').length > 0) {
        const timestamp = moment().valueOf()
        let newTodo = {
            id: uuidv4(),
            text: todoText,
            completed: false,
            createdAt: timestamp,
            updatedAt: timestamp
        }
        todos.unshift(newTodo)
        resetInputValues(e,filters)
        saveTodos(todos)
        renderTodos(todos,filters)
        generateSummaryDom(todos)
    }
})
// Add storage change event
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue)
        renderTodos(todos,filters)
    }
})

// Dates challenge
const now = new Date()
const birthday = new Date('December 1 900')

const nowTimestamp = now.getTime()
const birthdayTimeStamp = birthday.getTime()

if (nowTimestamp > birthdayTimeStamp) {
    console.log(`Now is bigger than BIrthday and equal to: ${now.toString()}`)
} else {
    console.log(`Birthday is bigger than Now and equal to: ${birthday.toString()}`)

}

// Moment Js Challenges

const nowMoment = moment().year(1984).month('December').date(1)

console.log(nowMoment.format('MMM D, YYYY'))
