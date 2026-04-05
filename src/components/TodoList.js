import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;