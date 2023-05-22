import { useState } from "react";

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
        placeholder="Enter task..."
      />
      <button id="submit" onClick={addItem}>
        Add
      </button>
      <ul>
        {tasksList.map((task, index) => (
          <div className="adder" key={index}>
            <li>{task}</li>
            <button className="X" onClick={() => removeItem(index)}>
              X
            </button>
          </div>
        ))}
      </ul>
        <img src="src/Adder.jpg"></img>
    </div>
  );
}
