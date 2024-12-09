export type Action = {
    type: string,
    todoBody: string,
    id: string
};

export type Todo = {
    id: string,
    completed: boolean,
    todoBody: string
};