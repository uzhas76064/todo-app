import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

describe("TodoForm", () => {
    it("renders input and button", () => {
        render(<TodoForm onSubmit={jest.fn()} />);
        expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
        expect(screen.getByText("Add task")).toBeInTheDocument();
    });

    it("calls onSubmit with input value and clears input", () => {
        const mockOnSubmit = jest.fn();
        render(<TodoForm onSubmit={mockOnSubmit} />);

        const input = screen.getByPlaceholderText("Add a new todo");
        const button = screen.getByText("Add task");

        fireEvent.change(input, { target: { value: "New Task" } });
        fireEvent.click(button);

        expect(mockOnSubmit).toHaveBeenCalledWith("New Task");
        expect((input as HTMLInputElement).value).toBe("");
    });
});
