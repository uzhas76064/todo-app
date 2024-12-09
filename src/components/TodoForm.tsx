import styled from 'styled-components';
import React, { useState } from "react";

const Input = styled.input`
    display: block;
    width: 100%;
    background: inherit;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    border-bottom: 1px solid;
    color: rgba(0, 0, 0, 0.4);
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-top: 60px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 14px;
    outline: none;
    border: none;
`;

const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

const ButtonNew = styled(Button)`
    background: #FFFFFF;
    padding: 11px 37px 10px 35px;
`;

interface TodoFormProps {
    onSubmit: (text: string) => void;
}

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
