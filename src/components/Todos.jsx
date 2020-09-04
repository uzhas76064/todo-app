import React from 'react';
import TodoItem from "./TodoItem";

const Todos = props => {
    let todoState = props.tasks.todos;

    let todos = todoState.map((item) => <TodoItem text={item.text} key={item.id}/>)

    return (
        <>
            {todos}
        </>
    );
};

export default Todos;