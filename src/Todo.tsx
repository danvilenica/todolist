import * as React from "react";
import "./Todo.css";

type Props = {
  todo: ITodo;
  toggleTodo: ToggleTodo;
};

const Todo: React.FC<Props> = ({ todo, toggleTodo }) => {
  const checkTodo: string = todo.completed ? `completed` : "";
  return (
      <div onClick={() => toggleTodo(todo.id)}>
        <h1 className={checkTodo}>{todo.text}</h1>
      </div>
  );
};

export default Todo;
