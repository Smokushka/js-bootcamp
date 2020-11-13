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
    const todosEl = document.querySelector('#todos')
    todosEl.innerHTML = ''
    if (todos.length > 0) {
    
        const filteredTodos = todos.filter(todo => {
                let isSeatchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
                let isHideCompletedMatch = !filters.hideCompleted || !todo.completed
                return isHideCompletedMatch && isSeatchTextMatch
            })
    
        filteredTodos.forEach(todo => {
            todosEl.appendChild(generateTodoDOM(todo))
        })
        generateSummaryDom(todos)
    } else {
        const emptyMessageEl = document.createElement('p')
        emptyMessageEl.textContent = 'No to-dos to show'
        emptyMessageEl.classList.add('empty-message')
        todosEl.appendChild(emptyMessageEl)

    }
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
    const todoEl = document.createElement('label')
    const checkboxEl = document.createElement('input')
    const todoText = document.createElement('span')
    const buttonEl = document.createElement('button')
    
    // transforming input to checkbox
    checkboxEl.setAttribute('type','checkbox')

    // Cheking Chekbox
    checkboxEl.checked = todo.completed
    divEl.appendChild(checkboxEl)

    // styling the button
    buttonEl.textContent = 'remove'
    buttonEl.classList.add('button','button--text')
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
    // Styling container
    todoEl.classList.add('list-item')
    divEl.classList.add('list-item__container')
    // Setup todoText
    todoText.textContent = todo.text
    divEl.appendChild(todoText)
    // todoEl.setAttribute('href',`/todo-edit.html#${todo.id}`)
    
    todoEl.appendChild(divEl)
    todoEl.appendChild(buttonEl)
    return todoEl
}
// Get the DOM Elements for list summary

const generateSummaryDom = function (todos) {
    document.querySelector('#incompleted-message').innerHTML = ''
    let uncompletedTodos = todos.filter(item => !item.completed)
    let introParagraph = document.createElement('h2')
    const suffix = uncompletedTodos.length > 1 ? 's' : ''
    introParagraph.textContent = `You have ${uncompletedTodos.length} todo${suffix} left`
    introParagraph.classList.add('list-title')
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