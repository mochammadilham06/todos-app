import { combineReducers } from "redux";
import todos from "./TodoSlice";

const reducer = combineReducers({
  todos,
});
export default reducer;
