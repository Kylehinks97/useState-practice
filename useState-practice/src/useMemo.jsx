import React, { useState, useEffect } from "react";

export default function UseMemoExample() {
  const [numberListWithMemo, setNumberListWithMemo] = useState([1, 2, 3, 4, 5]);
  const [numberListWithoutMemo, setNumberListWithoutMemo] = useState([
    1, 2, 3, 4, 5,
  ]);
  const [sumWithoutMemoResult, setSumWithoutMemoResult] = useState();

  useEffect(() => {
    calculateSumWithoutMemo().then((result) => {
      setSumWithoutMemoResult(result);
    });
  }, [numberListWithoutMemo]);

  const addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setNumberListWithMemo([...numberListWithMemo, randomNumber]);
    setNumberListWithoutMemo([...numberListWithoutMemo, randomNumber]);
  };

  const sumWithMemo = React.useMemo(() => {
    console.log("Calculating sum with useMemo...");
    return numberListWithMemo.reduce((acc, num) => acc + num, 0);
  }, [numberListWithMemo]);

  const calculateSumWithoutMemo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = numberListWithoutMemo.reduce((acc, num) => acc + num, 0);
        resolve(result);
      }, 500); // Simulated 1-second delay
    });
  };

  return (
    <div className="container">
      <h2>useMemo</h2>
      <p>
        The useMemo hook is used to improve performance by preventing unnecessary
        computation load. As the name suggests, it will use memory to remember
        the last result of the taxing computation. It will check if the new
        computation has been done already. If so, it will bypass the taxing work
        load and show the last result. <br /> <br />
        It's limitation is that this can only be used when the computation is static, unchanging. Changes will cause the lengthy computation to have to be done regardless. <br /><br />Very clever right? <br /><br />So how does it know what to skip and when? That is where the dependency parameter of the useMemo hook comes into play. You can populate the array with one, multiple or no variables. useMemo will listen out for changes made to these variables. If a very large array is required to be looked through, we can prevent this by storing the array in a variable and adding it to the dependencies array.
      </p>
      <h3>Use Case</h3>
      <p>Spam click the button to add a random number to the lists:</p>
      <button onClick={addRandomNumber}>Add Random Number</button>

      <div className="example">
        <h4>Example using useMemo</h4>
        <p>Numbers: {numberListWithMemo.join(", ")}</p>
        <p>Sum: {sumWithMemo}</p>
      </div>

      <div className="example">
        <h4>Example without using useMemo</h4>
        <p>Numbers: {numberListWithoutMemo.join(", ")}</p>
        <p>Sum: {sumWithoutMemoResult}</p>
      </div>
      <p>Notice how the example using useMemo calculates the numbers faster than the one without. There is a little delay. <br /><br />This is because it is having to look through a large array every time you click the button, whereas the other does not.</p>
      <p>Here is the code:</p>
      <img
        src="/public/images/useMemo (1).jpeg"
        className="code-image"
        alt="useMemo use case code"
      />
      <p>The way it works is we have two state variables: numbersListWithMemo and numbersListWithoutMemo. <br /><br />These state variables have the same contents, the numbers 1 through to 5 within an array. <br /><br /> When we click the button, it activates a function that adds a random number from 1 to 10 to the both arrays. The sum of both arrays are displayed to the page. But first, in order to emphasize the difference between the two, I instructed the computer to fill and array with 10,000 undefined's before adding the array. This gives the computer a helluva task. That is why when you spam the button, the one without useMemo will lag, demonstrating the power of useMemo's efficiency. </p>
    </div>
  );
}
