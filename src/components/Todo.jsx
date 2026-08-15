import AddTaskForm from "./AddTaskForm";
import TodoList from "./TodoList";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";

import { useSelector } from "react-redux";

const Todo = () => {
  const list = useSelector((store) => store.todo.list);
  const search = useSelector((store) => store.search.searchValue);

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo filteredList={filteredList} />
      <TodoList filteredList={filteredList} />
    </div>
  );
};

export default Todo;
