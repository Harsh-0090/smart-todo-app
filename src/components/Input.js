import React, { useState } from "react";

function Input({ todos, setTodos }) {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input === "") return;

    setTodos([
      ...todos,
      { text: input, completed: false }
    ]);

    setInput("");
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default Input;