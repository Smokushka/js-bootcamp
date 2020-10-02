let todos = getSavedTodos()

let filters = {
    searchText: '',
    hideCompleted: false
}

generateSummaryDom(todos)
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
    let newTodo = {
        text: e.target.elements.todoText.value,
        completed: false
    }
    todos.unshift(newTodo)
    resetInputValues(e,filters)
    saveTodos(todos)
    renderTodos(todos,filters)
    renderUncompletedMessage(todos)
})
