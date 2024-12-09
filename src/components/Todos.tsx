import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import {Todo} from "../types.ts";
import {FilterButton, FilterButtons} from "../styled-components/UI.tsx";

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    const addTodo = (text: string) => {
        if (text.trim()) {
            const newTodo = { id: Date.now(), text, completed: false };
            setTodos([...todos, newTodo]);
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const filteredTodos = () => {
        switch (filter) {
            case "active":
                return todos.filter(todo => !todo.completed);
            case "completed":
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <>
            <FilterButtons>
                <FilterButton
                    active={filter === "all"}
                    onClick={() => setFilter("all")}
                >
                    All
                </FilterButton>
                <FilterButton
                    active={filter === "active"}
                    onClick={() => setFilter("active")}
                >
                    Active
                </FilterButton>
                <FilterButton
                    active={filter === "completed"}
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </FilterButton>
            </FilterButtons>

            <TodoForm onSubmit={(text: string) => addTodo(text)} />

            {filteredTodos().map(todo => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onClick={() => toggleTodo(todo.id)}
                />
            ))}
        </>
    );
};

export default Todos;
