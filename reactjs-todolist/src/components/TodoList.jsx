import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos, handleDeleteItem, handleEditItem } = props;
  return (
    <ul className="main">
      {todos.map((todo, index) => (
        <TodoCard
          key={index}
          handleDeleteItem={() => handleDeleteItem(index)}
          handleEditItem={() => handleEditItem(index)}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}

export default TodoList;
