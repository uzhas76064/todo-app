const {v4: uuidv4} = require('uuid');

export const addTodo = () => ({
   type: 'ADD_TODO',
   id: uuidv4(),
});

export const updateTodoBody = todoBody => ({
   type: 'UPDATE_TODO_BODY',
   todoBody: todoBody
})

export const toggleTodo = id => ({
   type: 'TOGGLE_TODO',
   id: id
})

export const hideCompleted = () => ({
   type: 'HIDE_COMPLETED',
})