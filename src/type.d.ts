interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

type ContextType = {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    toggleTodo: (id: number) => void;
}

type ToggleTodo = (id: number) => void;