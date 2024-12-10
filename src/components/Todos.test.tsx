import { render, screen, fireEvent } from "@testing-library/react";
import Todos from "../components/Todos";

describe("Todos", () => {
    it("renders filter buttons and TodoForm", () => {
        render(<Todos />);
        expect(screen.getByText("All")).toBeInTheDocument();
        expect(screen.getByText("Active")).toBeInTheDocument();
        expect(screen.getByText("Completed")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
    });

    it("adds a new todo and displays it", () => {
        render(<Todos />);
        const input = screen.getByPlaceholderText("Add a new todo");
        const button = screen.getByText("Add task");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(button);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    it("filters todos correctly", () => {
        render(<Todos />);
        const input = screen.getByPlaceholderText("Add a new todo");
        const button = screen.getByText("Add task");

        fireEvent.change(input, { target: { value: "Task 1" } });
        fireEvent.click(button);
        fireEvent.change(input, { target: { value: "Task 2" } });
        fireEvent.click(button);

        const [task1, task2] = screen.getAllByText(/Task/);
        fireEvent.click(task1);

        fireEvent.click(screen.getByText("Active"));
        expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();

        fireEvent.click(screen.getByText("Completed"));
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
    });
});
