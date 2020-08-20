import React from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const List = styled.ul`
    list-style: none;
    margin-bottom: 87px;
    padding: 0;
`;

const TodoList = () => {
    return (
        <List>
            <TodoItem text="Hello world"/>
            <TodoItem text="Create SPA app"/>
        </List>
    );
};

export default TodoList;
