const SearchTaskForm = ({ search, setSearch }) => {
  return (
    <form className="todo__form">
      <div className="todo__field field">
        <label className="field__label" htmlFor="search-task">
          Search task
        </label>
        <input
          className="field__input"
          id="search-task"
          placeholder=" "
          autoComplete="off"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchTaskForm;
