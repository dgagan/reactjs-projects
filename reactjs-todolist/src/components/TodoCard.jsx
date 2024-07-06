function TodoCard(props) {
  const { children, handleDeleteItem, handleEditItem } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i class="fa-solid fa-pen-to-square" onClick={handleEditItem}></i>
        <i class="fa-solid fa-trash-can" onClick={handleDeleteItem}></i>
      </div>
    </li>
  );
}

export default TodoCard;
