import ToggleColour from "./toggleColor.jsx";
import Counter from "./Counter.jsx";
import "./App.css";
import List from "./List.jsx"
import Adder from "./Adder.jsx"

function App() {
  return (
    <div>
      <h1>useState in React</h1>
      <ToggleColour />
      <Counter />
      <Adder />
      <List />
    </div>
  );
}

export default App;
