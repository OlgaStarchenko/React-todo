import { useDispatch, useSelector } from "react-redux";
import { handleDeleteAll } from "../store/TodoSlice";
import Button from "./Button";

const TodoInfo = () => {
  const list = useSelector((store) => store.todo.list);
  const dispatch = useDispatch();
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Total tasks: <span>{list.length}</span>
      </div>
      <Button text={"Delete all"} onClick={() => dispatch(handleDeleteAll())} />
    </div>
  );
};
export default TodoInfo;
