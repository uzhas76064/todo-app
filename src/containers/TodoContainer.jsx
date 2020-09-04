import React from "react";
import {connect} from "react-redux";
import Todos from "../components/Todos";

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tasks: state.todoReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)

export default TodoContainer;