import { useDispatch } from "react-redux";
import { handleDeleteAll } from "../store/TodoSlice";
import Button from "./Button";

const TodoInfo = ({ filteredList }) => {
  const dispatch = useDispatch();
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Total tasks: <span>{filteredList.length}</span>
      </div>
      <Button text={"Delete all"} onClick={() => dispatch(handleDeleteAll())} />
    </div>
  );
};
export default TodoInfo;
