import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../store/TodoSlice";

export default function ListTodo() {
  const listTodo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(listTodo);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Fragment>
      <div>
        <h5>List here</h5>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {listTodo.map((item) => (
            <div key={item.id}>
              <li>{item.title}</li>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
