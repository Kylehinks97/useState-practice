import { useState } from "react"

export default function Adder() {
  const [inputText, setInputText] = useState("");
  const [tasksList, setTasksList] = useState([
    "wash the dishes",
    "make the bed",
    "take Roger for a walk",
  ]);

  function addItem() {
    setTasksList([...tasksList, inputText]);
    setInputText("");
  }

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function removeItem(index) {
    setTasksList(tasksList.filter((_, idx) => idx !== index));
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button id="submit" onClick={addItem}>
        Add Item
      </button>
      <ul>
        {tasksList.map((task, index) => (
          <div key={index}>
            <li>{task}</li>
            <button onClick={() => removeItem(index)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
