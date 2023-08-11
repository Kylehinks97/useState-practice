import ToggleColour from "./toggleColor.jsx";
import Counter from "./Counter.jsx";
import "./App.css";
import List from "./List.jsx";
import Adder from "./Adder.jsx";
import UseMemoExample from "./useMemo.jsx";

function App() {
  return (
    <div>
      <h1>useState in React</h1>
      <UseMemoExample />
      <ToggleColour />
      <Counter />
      <Adder />
      <List />
    </div>
  );
}

export default App;
