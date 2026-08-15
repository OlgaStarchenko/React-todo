import AddTaskForm from "./AddTaskForm";
import TodoList from "./TodoList";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState(["Почистить картошку", "Сходить в магазин"]);
  const [search, setSearch] = useState("");

  function addToDo(text) {
    if (text === "") {
      alert("Введите название задачи");
      return;
    }

    setList((prev) => [...prev, text]);
  }

  function deleteTodo(index) {
    setList((prev) => prev.filter((_, todoIndex) => todoIndex !== index));
  }

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addToDo={addToDo} />
      <SearchTaskForm search={search} setSearch={setSearch} />
      <TodoInfo list={filteredList} />
      <TodoList list={filteredList} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
