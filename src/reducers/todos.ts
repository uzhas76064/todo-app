let initialState = {
    todos: [],
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoBody: action.todoBody,
                todos: [...state.todos, {todoBody: action.todoBody, completed: false, id: action.id}]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    (todo.id === action.id) ? { ...todo,  completed: !todo.completed}: todo
                )
            };
        case 'HIDE_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(t => !t.completed)
            }
        default: return state;
    }
};

export default todoReducers;
