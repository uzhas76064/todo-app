import styled from 'styled-components';
import {TodoItemProps} from "../types.ts";

const Line = styled.hr`
    width: 10%;
    border: none;
    margin-left: 0;
    color: rgba(0,0,0,0.5);
    height: 1px;
    background-color: rgba(0,0,0,0.5);
`;

const ListItem = styled.div`
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    cursor: pointer;
`;

const TodoItem = ({ text, completed, onClick }: TodoItemProps) => {
    return (
        <ListItem
            style={{ textDecoration: completed ? "line-through" : "none" }}
            onClick={onClick}
        >
            {text}
            <Line />
        </ListItem>
    );
};

export default TodoItem;

