import React, { useState } from "react";
import {TodoFormProps} from "../types.ts";
import {ButtonNew, Buttons, Input} from "../styled-components/UI.tsx";

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
            />
            <Buttons>
                <ButtonNew type="submit">Add todo</ButtonNew>
            </Buttons>
        </form>
    );
};

export default TodoForm;
