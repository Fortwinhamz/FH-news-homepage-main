const todos = [
    {
        id: 1,
        text: 'Watch a Video',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Write Code',
        isCompleted: true
    },


    {
        id: 33,
        text: 'Mark yourself',
        isCompleted: false
    },


    {
        id: 1,
        text: 'Call Boss',
        isCompleted: true
    },
];



// const todoJSON = JSON.stringify(todos)

// console.log(todoJSON);



for ( let b = 1; b < todos.length; b++){
    console.log(todos[b].text)
}