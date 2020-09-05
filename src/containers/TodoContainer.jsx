import {connect} from "react-redux";
import Todos from "../components/Todos";
import {addTodo, updateTodoBody} from "../actions";

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tasks: state.todoReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodoBody: (todoBody) => dispatch(updateTodoBody(todoBody)),
        addTodo: () => dispatch(addTodo())
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)

export default TodoContainer;