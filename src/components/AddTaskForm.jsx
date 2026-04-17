import Field from "./field";
import Button from "./Button";
import { useState } from "react";

const AddTaskForm = ({ addToDo }) => {
  const [value, setValue] = useState("");
  return (
    <form className="todo__form">
      <Field value={value} setValue={setValue} />
      <Button
        onClick={() => {
          addToDo(value);
          setValue("");
        }}
      />
    </form>
  );
};
export default AddTaskForm;
