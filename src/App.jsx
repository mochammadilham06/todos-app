import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HomePage from "./Modules";
function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
