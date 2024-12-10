import React, { useState } from "react";
import {TodoFormProps} from "../types";
import {ButtonNew, Buttons, Input} from "../styled-components/UI";

const TodoForm = ({ onSubmit }: TodoFormProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
                required={true}
            />
            <Buttons>
                <ButtonNew type="submit">Add task</ButtonNew>
            </Buttons>
        </form>
    );
};

export default TodoForm;
