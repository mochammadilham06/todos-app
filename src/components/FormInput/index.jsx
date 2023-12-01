import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/TodoSlice";

export default function FormInput() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(addTodo(todo));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="create"
          onChange={handleChange}
          value={todo}
        />
        {/* <button type="submit">Submit</button> */}
      </form>
    </Fragment>
  );
}
