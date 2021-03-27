import TodoProvider from "./Store";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <TodoProvider>
        <h1>Todos for taking over the world</h1>
        <AddTodoForm />
        <TodoList />
    </TodoProvider>
  );
};

export default App;
