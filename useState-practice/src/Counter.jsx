import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment(increment) {
    setCount((currCount) => {
      return currCount + increment;
    });
  }
  return (
    <div className="container">
      <p>Here I have used useState to create two buttons that increment up and down a count by one. It works by first creating the buttons, we then set the onClick attributes of these buttons. onClick takes a function, so instead of writing hefty logic for both inside a button tag, I extracted the logic out into a separate function we call increment. This function will take a variable that we will add to the currentCount. I have called this increment. We then invoke the setCount function of the useState array, and then apply the logic thusly.</p>
      <h3>Count: {count}</h3>
      <button className="increment-btn" onClick={() => increment(1)}>+1</button>
      <button className="increment-btn" onClick={() => increment(-1)}>-1</button>
      <p>Here is the code:</p>
      <img src="/src/Counter.jpeg"></img>
    </div>
  );
}

