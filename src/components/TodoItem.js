import React from "react";

function TodoItem({ todo, index, todos, setTodos }) {

  const deleteTask = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </span>

      <button onClick={toggleComplete}>
        {todo.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TodoItem;