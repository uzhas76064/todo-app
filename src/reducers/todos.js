const {v4: uuidv4} = require('uuid');

let initialState = {
    todos: [
        { text: 'Сделать уроки', completed: false, id:uuidv4() },
        { text: 'Купить хлеб', completed: false, id:uuidv4() },
        { text: 'Купить молоко', completed: false, id: uuidv4() }
    ],
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
            return 1;
        default: return state;
    }
};

export default todoReducers;
