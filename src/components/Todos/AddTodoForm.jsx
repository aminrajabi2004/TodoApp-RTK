import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAsyncTodo } from "../../features/todo/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addAsyncTodo({ title: value }));
    setValue("");
  };

  return (
    <form
      className={`form-inline mt-3 mb-4 ${
        loading ? "opacity-50" : "opacity-100"
      }`}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="mb-1">
        Name
      </label>
      <input
        autoComplete="off"
        id="name"
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button disabled={loading} type="submit" className="btn btn-primary mt-1">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default AddTodoForm;
