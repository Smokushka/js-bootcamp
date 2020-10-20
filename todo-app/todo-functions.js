// Fetch existing Todos from localStorage

const getSavedTodos = function () {
   let todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
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
    generateSummaryDom(todos)
}
// deleteTodo
const deleteTodo = function (id) {
    let todoIndex
    todos.filter((todo,index) => {
        if (todo.id === id) {
            todoIndex = index
        }
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex,1)
    }
}
// Check Uncheck Todos

const toggleTodo = function (id) {
    let todo = todos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
}

// Get the DOM Elelments for an individual note

const generateTodoDOM = function (todo) {
    const divEl = document.createElement('div')
    const todoEl = document.createElement('a')
    const checkboxEl = document.createElement('input')
    const buttonEl = document.createElement('button')
    
    // transforming input to checkbox
    checkboxEl.setAttribute('type','checkbox')

    // Cheking Chekbox
    checkboxEl.checked = todo.completed

    // styling the button
    buttonEl.textContent = 'x'
    // add delete event
    buttonEl.addEventListener('click',() => {
        deleteTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })
    // add checked event
    checkboxEl.addEventListener('change',(e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    
    todoEl.textContent = todo.text
    todoEl.setAttribute('href',`/todo-edit.html#${todo.id}`)
    
    divEl.appendChild(checkboxEl)
    divEl.appendChild(todoEl)
    divEl.appendChild(buttonEl)
    return divEl
}
// Get the DOM Elements for list summary

const generateSummaryDom = function (todos) {
    document.querySelector('#incompleted-message').innerHTML = ''
    let uncompletedTodos = todos.filter(item => !item.completed)
    
    let introParagraph = document.createElement('h2')
    introParagraph.textContent = `You have ${uncompletedTodos.length} todos left`
    document.querySelector('#incompleted-message').appendChild(introParagraph)
}
// Reset all the Input values

const resetInputValues = function (e,filters) {
    document.querySelector('#filter').value = ''
    e.target.elements.todoText.value = ''
    filters.searchText = ''
}
// 

const updateTimestampElement = function (todo) {
    timestampElement.textContent = moment(todo.updatedAt).fromNow()
}