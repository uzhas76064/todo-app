import {connect} from "react-redux";
import Todos from "../components/Todos";
import {addTodo, hideCompleted, toggleTodo} from "../actions";

const mapStateToProps = (state) => {
    return {
        tasks: state.todoReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoBody) => dispatch(addTodo(todoBody)),
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        hideCompleted: () => dispatch(hideCompleted())
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)

export default TodoContainer;