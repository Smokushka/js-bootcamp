const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Calgary'
},{
    title: 'JavaScript work',
    body: 'Watch Udemy course'
},{
    title: 'Replace the monitor',
    body: 'Contact the seller'
}]

const findNote = function (notes,title) {
    return notes.find(function (note,index) {
       return note.title === title
    })
}
// const findNote = function (notes,title) {
//     let index = notes.findIndex(function (note,index) {
//        return note.title === title
//     })
//     return notes[index]
// }

const note = findNote(notes,'My next trip')
console.log(note)

const sortNotes = function (notes) {
    notes.sort(function (a,b) {
        
    })
}

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// console.log(notes.unshift('My first note'))
// console.log(notes.length)
// console.log(notes[4])

// notes.splice(1,1,'This is a new second item')

// notes[2] = 'This is now a new note 3'

// notes.forEach(function (item,index) {
//     console.log(index)
//     console.log(item)
// })
// console.log(notes)

// let index = notes.findIndex(function (note,index) {
//     console.log(note)
//     return note.title === 'JavaScript work'
// })
// console.log(index)