import React, { useState } from 'react';
import TodoProvider from "./Store";
import AddTodoForm from "./AddTodoForm";
import Todos from "./TodoList";

const App = () => {
  return (
    <TodoProvider>
        <h1>Todos for taking over the world</h1>
        <AddTodoForm />
        <Todos />
    </TodoProvider>
  );
};

export default App;
