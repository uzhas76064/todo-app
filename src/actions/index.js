export const addTodo = text => ({
   type: 'ADD_TODO',
   id: (+new Date).toString(6),
   text
});