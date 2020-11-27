import React from "react";
import "../src/App.css";
import Tasks from "./components/Tasks";

function App() {
  const [todos, setTodos] = React.useState([]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  setTodos([
    ...todos,
    {
      title,
    },
  ]);

  return (
    <div className="App">
      <div className="form">
        <h1>Todo List</h1>
        <Tasks />
        <ul></ul>
      </div>
    </div>
  );
}

export default App;
