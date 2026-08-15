import Field from "./field";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddToDo } from "../store/TodoSlice";

const AddTaskForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <form className="todo__form">
      <Field value={value} setValue={setValue} />
      <Button
        text={"Add"}
        onClick={() => {
          dispatch(handleAddToDo(value));
          setValue("");
        }}
      />
    </form>
  );
};
export default AddTaskForm;
