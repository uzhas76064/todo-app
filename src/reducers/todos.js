let initialState = {
    todos: [],
    newTodoBody: ''
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TODO_BODY':
            return {
                ...state,
                newTodoBody: action.todoBody
            }
        case 'ADD_TODO':
            return {
                ...state,
                newTodoBody: '',
                todos: [...state.todos, {text: state.newTodoBody, completed: false, id: action.id}]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.id) {
                        return {...todo, completed: true}
                    }
                    return todo;
                })
            };
        default: return state;
    }
};

export default todoReducers;
