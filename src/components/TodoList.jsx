import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const list = useSelector((store) => store.todo.list);

  const hasTasks = list.length > 0;

  if (!hasTasks) return <div className="todo__empty-message">Empty...</div>;

  return (
    <ul className="todo__list">
      {list.map((text, index) => (
        <TodoItem key={index} text={text} index={index} />
      ))}
    </ul>
  );
};
export default TodoList;
