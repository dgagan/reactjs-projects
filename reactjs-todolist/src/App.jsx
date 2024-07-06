import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const handleDeleteItem = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };
  const handleEditItem = (index) => {
    setText(todos[index]);
    handleDeleteItem(index);
  };
  return (
    <>
      <TodoInput
        todos={todos}
        setTodos={setTodos}
        text={text}
        setText={setText}
      />
      <TodoList
        todos={todos}
        handleDeleteItem={handleDeleteItem}
        handleEditItem={handleEditItem}
      />
    </>
  );
}

export default App;
