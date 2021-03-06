import React from "react";
import { TodoContext } from "./Store";
import Todo from "./Todo";

const TodoList = () => {
    const { todos, toggleTodo } = React.useContext(TodoContext) as ContextType;

    return (
        <>
            {todos.map((todo:ITodo)=>(
                <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </>
    );
};

export default TodoList;