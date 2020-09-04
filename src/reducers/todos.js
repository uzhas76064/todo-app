let initialState = {
    todos: [
        { text: 'Сделать уроки', completed: false, id:1 },
        { text: 'Купить хлеб', completed: false, id:2 },
        { text: 'Купить молоко', completed: false, id: 3 }
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
