export const addTodo = text => ({
   type: 'ADD_TODO',
   id: (+new Date).toString(6),
   text
});

export const toggleTodo = id =>({
   type: 'TOGGLE_TODO',
   id
});
