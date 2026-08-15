import TodoItem from "./TodoItem";

const TodoList = ({ list, deleteTodo }) => {
  const hasTasks = list.length > 0;

  if (!hasTasks) return <div className="todo__empty-message"></div>;

  return (
    <ul className="todo__list">
      {list.map((text, index) => (
        <TodoItem
          key={index}
          text={text}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
