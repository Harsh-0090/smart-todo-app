import React, { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    )
    .filter((todo) =>
      filter === "all" ? true : todo.completed === true
    );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Smart Todo App</h1>

      <Input todos={todos} setTodos={setTodos} />

      <input
        placeholder="Search task"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;