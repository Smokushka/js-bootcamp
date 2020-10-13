let todos = getSavedTodos()
const todoId = location.hash.substring(1)
let todo = todos.find((todo) => todo.id === todoId)

const textElement = document.querySelector('#text')
const deleteElement = document.querySelector('#delete')
const timestampElement = document.querySelector('#timestamp')

if (todo === undefined) {
    location.assign('/index.html')
}

deleteElement.addEventListener('click', (e) => {
    deleteTodo(todo.id)
    saveTodos(todos)
    location.assign('/index.html')
})
textElement.addEventListener('input', (e) => {
    todo.text = e.target.value
    todo.updatedAt = moment().valueOf()
    updateTimestampElement(todo)
    saveTodos(todos)
})
textElement.value = todo.text
updateTimestampElement(todo)
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue)
        todo = todos.find((todo) => todo.id === todoId)
        textElement.value = todo.text
        updateTimestampElement(todo)
    }
})
