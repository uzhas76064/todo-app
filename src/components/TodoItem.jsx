import React from "react";
import styled from 'styled-components';

const Line = styled.hr`
    width: 10%;
    border: none;
    margin-left: 0;
    color: rgba(0,0,0,0.5);
    height: 1px;
    background-color: rgba(0,0,0,0.5);
`;

const ListItem = styled.li`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    cursor: pointer;
`;

const TodoItem = (props) => {
    return (
        <ListItem>
            {props.text}
           <Line/>
        </ListItem>
    );
};

export default TodoItem;
