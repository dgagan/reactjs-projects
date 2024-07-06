import { useState } from "react";

function TodoInput(props) {
  const { todos, setTodos, setText, text } = props;

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText("");
  };
  return (
    <header>
      <input
        type="text"
        value={text}
        placeholder="Add a todo..."
        onChange={handleTextChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </header>
  );
}

export default TodoInput;
