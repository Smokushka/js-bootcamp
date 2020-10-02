const todos = [{
    text: 'Grocery Shopping',
    completed: true
},{
    text: 'Hockey Watching',
    completed: false

},{
    text: 'JavaScript Learning',
    completed: true

},{
    text: 'Walking with Masha',
    completed: false

},{
    text: 'Playing Tennis',
    completed: true

}]


const getThingsToDo = function (todos) {
    return todos.filter(todo => todo.completed === false)
}

const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if (a.completed === false && b.completed === true) {
            return -1
        } else if (b.completed === false && a.completed === true) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))
// todos.splice(2,1)
// todos.push('New Item in the end')
// todos.shift()

// console.log(`You have ${todos.length} todos!`)
// todos.forEach(function (item,index) {
//     console.log(`${index + 1}. ${item}`)
// })