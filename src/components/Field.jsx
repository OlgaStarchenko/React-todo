const Field = ({ value, setValue }) => {
  return (
    <div className="todo__field field">
      <label className="field__label" htmlFor="new-task">
        New task
      </label>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="field__input"
        id="new-task"
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
};

export default Field;
