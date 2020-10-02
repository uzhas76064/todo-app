import {connect} from "react-redux";
import Todos from "../components/Todos";
import {addTodo, hideCompleted, toggleTodo, updateTodoBody} from "../actions";

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tasks: state.todoReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodoBody: (todoBody) => dispatch(updateTodoBody(todoBody)),
        addTodo: () => dispatch(addTodo()),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        hideCompleted: () => dispatch(hideCompleted())
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)

export default TodoContainer;