import { useDispatch, useSelector } from "react-redux";
import { handleSearchValue } from "../store/searchSlice";

const SearchTaskForm = () => {
  const search = useSelector((store) => store.search.searchvalue);

  const dispatch = useDispatch();
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
          onChange={(event) => dispatch(handleSearchValue(event.target.value))}
        />
      </div>
    </form>
  );
};

export default SearchTaskForm;
