import TodoItem from "./TodoItem";

const TodoList = ({ list }) => {
  const hasTasks = list.length > 0;

  if (!hasTasks) return <div className="todo__empty-message"></div>;

  return (
    <ul className="todo__list">
      {list.map((text, index) => (
        <TodoItem key={index} text={text} index={index} />
      ))}
    </ul>
  );
};
export default TodoList;
