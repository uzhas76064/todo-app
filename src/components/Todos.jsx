import React from 'react';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todos = props => {
    let todoState = props.tasks.todos;
    let todoBody;

    let toggleTodo = (id) => {
        props.toggleTodo(id);
    }

    let todos = todoState.map((item) => <TodoItem onClick={() => toggleTodo(item.id)} completed={item.completed} text={item.text} key={item.id}/>);

    let updateNewTodoBody = (e) => {
        todoBody = e.target.value;
        props.updateTodoBody(todoBody);
    }

    let addNewTodo = () => {
        props.addTodo();
    }

    let onSubmitFrom = (e) => {
        e.preventDefault();
    }

    let hideCompleted = () => {
        props.hideCompleted();
    }

    return (
        <>
            {todos}
            <TodoForm hideCompleted={hideCompleted}
                      onSubmitFrom={onSubmitFrom}
                      addNewTodo={addNewTodo}
                      updateNewTodoBody={updateNewTodoBody}/>
        </>
    );
};

export default Todos;