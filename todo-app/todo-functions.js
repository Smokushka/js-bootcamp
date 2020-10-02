// Fetch existing Todos from localStorage

const getSavedTodos = function () {
   let todosJSON = JSON.parse(localStorage.getItem('todos'))

    if(todosJSON !== null) {
        return todosJSON
    } else {
        return []
    }
}

// Save todos to the localStorage

const saveTodos = function (todos) {
    localStorage.setItem('todos',JSON.stringify(todos))
}
// Render application todos based on filters
const renderTodos = function (todos, filters) {
    if (todos) {
        document.querySelector('#todos').innerHTML = ''
    
        const filteredTodos = todos.filter(todo => {
                let isSeatchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
                let isHideCompletedMatch = !filters.hideCompleted || !todo.completed
                return isHideCompletedMatch && isSeatchTextMatch
            })
    
    
        filteredTodos.forEach(todo => {
            document.querySelector('#todos').appendChild(generateTodoDOM(todo))
        })
    }
    
}

// Get the DOM Elelments for an individual note

const generateTodoDOM = function (todo) {
    let todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    return todoEl
}
// Get the DOM Elements for list summary

const generateSummaryDom = function (todos) {
    document.querySelector('#incompleted-message').innerHTML = ''
    let uncompletedTodos = todos.filter(item => !item.completed)
    
    let introParagraph = document.createElement('p')
    introParagraph.textContent = `You have ${uncompletedTodos.length} todos left`
    document.querySelector('#incompleted-message').appendChild(introParagraph)
}
// Reset all the Input values

const resetInputValues = function (e,filters) {
    document.querySelector('#filter').value = ''
    e.target.elements.todoText.value = ''
    filters.searchText = ''
}