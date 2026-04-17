import AddTaskForm from "./AddTaskForm";
import TodoList from "./TodoList";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState(["Почистить картошку", "Сходить в магазин"]);

  function addToDo(text) {
    setList((prev) => [...prev, text]);
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addToDo={addToDo} />
      <SearchTaskForm />
      <TodoInfo list={list} />
      <TodoList list={list} />
    </div>
  );
};

export default Todo;
