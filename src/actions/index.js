const {v4: uuidv4} = require('uuid');

export const addTodo = (todoBody) => ({
   type: 'ADD_TODO',
   todoBody,
   id: uuidv4(),
});

export const toggleTodo = id => ({
   type: 'TOGGLE_TODO',
   id: id
})

export const hideCompleted = () => ({
   type: 'HIDE_COMPLETED',
})