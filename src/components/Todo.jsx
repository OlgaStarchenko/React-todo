import AddTaskForm from "./AddTaskForm";
import TodoList from "./TodoList";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";

const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </div>
  );
};

export default Todo;
