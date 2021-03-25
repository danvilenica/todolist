import React, { useState } from 'react';
import { TodoList } from './ToDoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
  { text: "Odradi trening", complete: true },
  { text: "Poslušaj predavanje", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedtodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedtodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </React.Fragment>)
};

export default App;
