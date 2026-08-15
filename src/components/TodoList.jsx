import TodoItem from "./TodoItem";

const TodoList = ({ filteredList }) => {
  const hasTasks = filteredList.length > 0;

  if (!hasTasks) return <div className="todo__empty-message">Empty...</div>;

  return (
    <ul className="todo__list">
      {filteredList.map((text, index) => (
        <TodoItem key={index} text={text} index={index} />
      ))}
    </ul>
  );
};
export default TodoList;
