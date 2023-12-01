import { Fragment } from "react";
import FormInput from "../components/FormInput";
import ListTodo from "../components/List/list";

export default function HomePage() {
  return (
    <Fragment>
      <FormInput />
      <ListTodo />
    </Fragment>
  );
}
