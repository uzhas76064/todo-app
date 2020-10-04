import React from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todos = props => {
    let todoState = props.tasks.todos;

    let toggleTodo = (id) => {
        props.toggleTodo(id);
    }

    let todos = todoState.map((item) => <TodoItem onClick={() => toggleTodo(item.id)} completed={item.completed} text={item.todoBody} key={item.id}/>);

    let onSubmit = (values) => {
        console.log(values.todoInput)
        props.addTodo(values.todoInput)
    }

    let hideCompleted = () => {
        props.hideCompleted();
    }

    return (
        <>
            {todos}
            <TodoForm hideCompleted={hideCompleted}
                      onSubmit={onSubmit}/>
        </>
    );
};

export default Todos;