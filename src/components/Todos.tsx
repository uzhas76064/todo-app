import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import {Todo} from "../types.ts";

const FilterButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const FilterButton = styled.button<{ active: boolean }>`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#6a1b9a" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#6a1b9a")};
  box-shadow: ${({ active }) => (active ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none")};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? "#4a148c" : "#f3e5f5")};
    color: ${({ active }) => (active ? "#ffffff" : "#6a1b9a")};
  }
`;

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
