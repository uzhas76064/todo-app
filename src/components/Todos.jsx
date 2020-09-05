import React from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todos = props => {
    let todoState = props.tasks.todos;

    let todos = todoState.map((item) => <TodoItem text={item.text} key={item.id}/>);

    let updateNewTodoBody = (e) => {
        let todoBody = e.target.value;
        props.updateTodoBody(todoBody);
    }

    let addNewTodo = (e) => {
        e.preventDefault();
        props.addTodo();
    }

    return (
        <>
            {todos}
            <TodoForm addNewTodo={addNewTodo} updateNewTodoBody={updateNewTodoBody}/>
        </>
    );
};

export default Todos;