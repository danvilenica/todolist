import React, {useState} from "react";

export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id: 1,
            text: "Odradi trening",
            completed: false
        }
    ]);

    const addTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(),
            text: todo.text,
            completed: false
        }
        setTodos([...todos, newTodo]);
    };

    const toggleTodo=(id:number)=>{
        todos.filter((todo:ITodo)=>{
            if (id===todo.id) {
                todo.completed=!todo.completed;
                setTodos([...todos]);
            }
        });
    };

    return (
        <TodoContext.Provider value={{todos, addTodo, toggleTodo}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;