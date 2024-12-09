export type TodoFormProps  = {
    onSubmit: (text: string) => void;
}

export type TodoItemProps = {
    text: string,
    completed: boolean,
    onClick: () => void
}

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
}