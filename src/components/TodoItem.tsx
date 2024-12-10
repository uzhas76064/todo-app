import {TodoItemProps} from "../types";
import {Line, ListItem} from "../styled-components/UI";

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

