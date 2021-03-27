import React from "react";
import { TodoContext } from "./Store";


const AddTodoForm: React.FC = () => {
    const { addTodo } = React.useContext(TodoContext) as ContextType;
    const [newTodo, setNewTodo] = React.useState("");

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setNewTodo(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent, newTodo: ITodo | any) => {
        e.preventDefault();
        const todo: ITodo = {
            id: 1,
            text: newTodo,
            completed: false
        }
        addTodo(todo);
        setNewTodo("");
    };

    return (
        <form className="Form" onSubmit={(e) => handleSubmit(e, newTodo)}>
          <div>
            <div>
              <label htmlFor="text">Task</label>
              <input onChange={handleChange} type="text" id="text" />
            </div>
          </div>
          <button disabled={newTodo === undefined ? true : false}>Add Todo</button>
        </form>
      );
}

export default AddTodoForm;