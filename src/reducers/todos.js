const {v4: uuidv4} = require('uuid');

let initialState = {
    todos: [
        { text: 'Сделать уроки', completed: false, id:uuidv4() },
        { text: 'Купить хлеб', completed: false, id:uuidv4() },
        { text: 'Купить молоко', completed: false, id: uuidv4() }
    ]
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
           return 1
        case 'TOGGLE_TODO':
            return 1;
        default: return state;
    }
};

export default todoReducers;
