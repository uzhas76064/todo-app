import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("TodoItem", () => {
    it("renders text and applies completed style", () => {
        render(<TodoItem text="Test Task" completed={true} onClick={jest.fn()} />);
        const item = screen.getByText("Test Task");

        expect(item).toBeInTheDocument();
        expect(item).toHaveStyle("text-decoration: line-through");
    });

    it("calls onClick when clicked", () => {
        const mockOnClick = jest.fn();
        render(<TodoItem text="Test Task" completed={false} onClick={mockOnClick} />);

        const item = screen.getByText("Test Task");
        fireEvent.click(item);

        expect(mockOnClick).toHaveBeenCalled();
    });
});
