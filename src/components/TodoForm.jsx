import React from "react";
import styled from 'styled-components';
import {Field, reduxForm} from "redux-form";
import FormControl from "../hoc/FormControl";
import {required} from "../validators/validators";

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
    font-family: Roboto;
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

const ButtonHide = styled(Button)`
    background: #FFE482;
    padding: 11px 10px 10px 12px;
`;

const ButtonNew = styled(Button)`
    background: #FFFFFF;
    padding: 11px 37px 10px 35px;
`;

let InputField = FormControl(Input);

const TodoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required]} name='todoInput' component={InputField} type="text" placeholder="Enter a new todo item"/>
            <Buttons>
                <ButtonHide onClick={props.hideCompleted}>Hide completed</ButtonHide>
                <ButtonNew>Add todo</ButtonNew>
            </Buttons>
        </form>
    );
};

export default reduxForm({form: 'todoForm'})(TodoForm);